// socket.js
import io from "socket.io-client";

const userID = sessionStorage.getItem("userId") || `user_${Math.random().toString(36).slice(2, 11)}`;
sessionStorage.setItem("userId", userID);

<<<<<<< HEAD
const socket = io("https://connect-match-backend.vercel.app/", {
=======
const socket = io("https://connect-match-backend.vercel.app", {
>>>>>>> 2cbcf41 (changes done)
  transports: ["polling"],
  query: { userID },
  withCredentials: true,
});

export default socket;