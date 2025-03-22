import io from "socket.io-client";

const userID = sessionStorage.getItem("userId") || `user_${Math.random().toString(36).slice(2, 11)}`;
sessionStorage.setItem("userId", userID);

<<<<<<< HEAD:src/socket.jsx
const socket = io("https://connect-match-backend.vercel.app", {
=======
const socket = io("https://connectmatch-backend.onrender.com", {
>>>>>>> dff633fa53bfe0d9de23871219bab212b1c0142f:src/socket.js
  query: { userID },
  withCredentials: true,
});

export default socket;
