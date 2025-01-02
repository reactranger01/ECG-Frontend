import React from "react";

import loadable from "../utils/loadable";
import Loading from "../Components/Loading";
// Landing Page
export const Landing = loadable(() => import("./Landing"), {
  fallback: <Loading />,
});
export const Home = loadable(() => import("./Home"), {
  fallback: <Loading />,
});
export const ChatPage = loadable(() => import("./ChatPage"), {
  fallback: <Loading />,
});
