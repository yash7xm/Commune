import { useEffect, useState } from "react";
import Auth from "../../components/auth";
import Chat from "../../components/chat";
import Message from "../../components/message";
import socket from "../../config/socket-config";
import axios from "axios";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(
    localStorage.getItem("commune-jwt") !== null
  );

  useEffect(() => {
    const fetchData = async () => {
      if (loggedIn) {
        try {
          const response = await axios.get(
            "http://localhost:8080/api/v1/user/id",
            {
              headers: {
                "x-access-token": localStorage.getItem("commune-jwt") || "",
              },
            }
          );
          connectToSocketServer(response.data.data.username);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchData();
  }, [loggedIn]);

  const connectToSocketServer = (username: string) => {
    console.log(username);
    socket.auth = { username };
    socket.connect();
  };

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
