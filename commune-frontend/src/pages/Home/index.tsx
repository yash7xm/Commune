import { useEffect, useState } from "react";
import Auth from "../../components/auth";
import Chat from "../../components/chat";
import Message from "../../components/message";
import socket from "../../config/socket-config";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(
    localStorage.getItem("commune-jwt") !== null
  );

  useEffect(() => {
    if (loggedIn) {
      // localStorage.clear();
    }
    console.log(loggedIn);
    console.log(localStorage.getItem("commune-jwt"));
  }, []);

  const handleLoggedIn = (value: boolean) => {
    setLoggedIn(value);
  };

  socket.onAny((event, ...args) => {
    console.log(event, args);
  });

  return (
    <div className="h-screen w-screen p-3 bg-[#7A3274] ">
      {loggedIn ? (
        <div className="h-full w-full flex items-end justify-end">
          <Chat />
          <Message />
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <Auth handleLoggedIn={handleLoggedIn} />
        </div>
      )}
    </div>
  );
};

export default Home;
