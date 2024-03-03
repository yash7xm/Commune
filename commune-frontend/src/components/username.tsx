import { useState } from "react";
import socket from "../config/socket-config";

const UsernameSelect = () => {
  const [username, setUsername] = useState<any>("");

  function handleUsernameSelection(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    socket.auth = { username };
    socket.connect();
  }

  return (
    <div>
      <form onSubmit={handleUsernameSelection}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default UsernameSelect;
