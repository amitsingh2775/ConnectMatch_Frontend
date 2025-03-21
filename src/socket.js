import io from "socket.io-client";

const userID = sessionStorage.getItem("userId") || `user_${Math.random().toString(36).slice(2, 11)}`;
sessionStorage.setItem("userId", userID);

const socket = io("https://connectmatch-backend.onrender.com", {
  query: { userID },
  withCredentials: true,
});

export default socket;
