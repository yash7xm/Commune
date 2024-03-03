import { io } from "socket.io-client";

const socket = io("http://localhost:8080", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd",
  },
  autoConnect: false,
});

export default socket;
