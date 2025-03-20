// socket.js
import io from "socket.io-client";

const userID = sessionStorage.getItem("userId") || `user_${Math.random().toString(36).slice(2, 11)}`;
sessionStorage.setItem("userId", userID);

const socket = io("https://connect-match-backend.vercel.app/", {
  transports: ["websocket"],
  query: { userID },
});

export default socket;
