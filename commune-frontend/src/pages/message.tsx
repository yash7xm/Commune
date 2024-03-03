import React, { useEffect, useState } from "react";
import socket from "../config/socket-config";

const Message: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const messageListener = (msg: any) => {
      console.log(`message received: ${msg}`);
      setMessages(prevMessages => [...prevMessages, msg]);
    };

    socket.on("message", messageListener);

    // Clean up socket listener on component unmount
    return () => {
      socket.off("message", messageListener);
    };
  }, []);

  const handleMessageSent = (e: React.FormEvent<HTMLFormElement>) => {
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
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Message sent successfully");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
    }
  };

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
      <div className="flex flex-col">
        {messages.map((msg: any, index: number) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    </div>
  );
};

export default Message;
