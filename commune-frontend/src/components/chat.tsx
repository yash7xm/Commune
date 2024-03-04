import { ChevronDown } from "lucide-react";
import socket from "../config/socket-config";
import { useEffect, useState } from "react";

const Chat = () => {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    socket.on("users", (users) => {
      users.forEach((user: any) => {
        user.self = user.userID === socket.id;
      });

      users = users.sort((a: any, b: any) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.username < b.username) return -1;
        return a.username > b.username ? 1 : 0;
      });

      setUsers(users);
    });
  }, []);

  return (
    <div className="h-[95%] w-[25%] rounded-s-md bg-[#3F0E40] p-3">
      <div className="text-white text-start text-lg mb-8 px-2">Commune</div>
      <div className="px-4 text-white mb-4 text-sm flex gap-1 items-center">
        <span>
          <ChevronDown />
        </span>{" "}
        <span>Direct messages</span>
      </div>
      <div className="h-[40%] flex flex-col gap-2">
        {users.map((user: any) => (
          <div
            key={user.userID}
            className="user flex h-[15%] gap-2 items-center py-1 px-2 hover:bg-[#7A3274] rounded-sm cursor-pointer"
          >
            <div className="user-img h-full">
              <img
                className="h-full rounded-sm"
                src="https://github.com/shadcn.png"
                alt=""
              />
            </div>
            <div className="user-name text-white text-sm">{user.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
