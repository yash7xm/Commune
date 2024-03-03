import React, { useEffect, useState } from "react";
import socket from "../config/socket-config";
import UsernameSelect from "../components/username";

const Message: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [user, setUser] = useState<any>("");

  useEffect(() => {
    const messageListener = (msg: any) => {
      console.log(`message received: ${msg}`);
      socket.emit("private message", {
        content: msg,
        to: user.userId,
      });
      setMessages((prevMessages) => [...prevMessages, msg]);
    };

    socket.on("message", messageListener);

    socket.on("users", (users) => {
      users.forEach((user: any) => {
        user.self = user.userID === socket.id;
        // initReactiveProperties(user);
      });
      // put the current user first, and then sort by username
      users = users.sort((a: any, b: any) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.username < b.username) return -1;
        return a.username > b.username ? 1 : 0;
      });

      setUser(users[0]);
    });

    console.log(user);

    // this.selectedUser.messages.push({
    //   content,
    //   fromSelf: true,
    // });

    socket.on("private message", (args) => {
      console.log(args);
    });

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
      <UsernameSelect />
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
