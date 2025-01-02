import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:4000"); // Replace with your backend URL

const ChatPage = () => {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    // Listen for incoming messages
    socket.on("messageReceived", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => socket.disconnect(); // Cleanup socket on component unmount
  }, []);

  const joinRoom = async () => {
    if (room) {
      // Fetch existing messages for the room
      const { data } = await axios.get(
        `http://localhost:4000/api/messages/${room}`
      );
      setMessages(data);

      // Join the chat room
      socket.emit("joinChat", room);
      setJoined(true);
    }
  };

  const sendMessage = async () => {
    if (message && room) {
      const messageData = {
        chatId: room,
        sender: "user-id-placeholder", // Replace with actual user ID if using authentication
        content: message,
      };

      // Emit the message to the backend via socket
      socket.emit("newMessage", messageData);

      // Add the message locally for instant feedback
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: { name: "You" }, content: message },
      ]);

      setMessage("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {!joined ? (
        <div>
          <h2>Join a Chat Room</h2>
          <input
            type="text"
            placeholder="Room ID"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            style={{ padding: "10px", marginRight: "10px" }}
          />
          <button onClick={joinRoom} style={{ padding: "10px" }}>
            Join
          </button>
        </div>
      ) : (
        <div>
          <h2>Room: {room}</h2>
          <div
            style={{
              marginBottom: "20px",
              height: "300px",
              overflowY: "scroll",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <div key={index}>
                <strong>{msg.sender.name}:</strong> {msg.content}
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ padding: "10px", marginRight: "10px", width: "80%" }}
          />
          <button onClick={sendMessage} style={{ padding: "10px" }}>
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
