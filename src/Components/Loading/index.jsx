import React from "react";
const Loading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] flex items-center justify-center  backdrop-blur-[1px] z-[999]">
      <div className="spinner z-[1000]">Loading</div>
    </div>
  );
};

export default Loading;
