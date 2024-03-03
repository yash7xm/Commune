import React, { useEffect } from "react";
import socket from "../config/socket-config";

const Message = () => {
  useEffect(() => {
    socket.on("message", (msg) => {
      console.log(`message recieved ${msg}`);
    });
  }, []);

  function handleMessageSent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const message = formData.get("message");
    console.log(message);

    if (message) {
      fetch("http://localhost:8080/api/v1/msg/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message }),
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Message sent successfully");
      });
    }
  }

  return (
    <div>
      <form onSubmit={handleMessageSent}>
        <input
          className="border text-lg p-3 rounded-md"
          type="text"
          name="message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Message;
