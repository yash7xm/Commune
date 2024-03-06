import { ChevronDown } from "lucide-react";
import socket from "../config/socket-config";
import { useEffect, useState } from "react";
import AddUserDialog from "./addUserDialog";
import { getAllChannels, filterChannelName } from "../hooks";

const Chat = () => {
  const [channels, setChannels] = useState<any>([]);

  useEffect(() => {
    const fetchAllChannels = async () => {
      try {
        const response = await getAllChannels();
        const channels = await filterChannelName(response.data);
        console.log(channels);
        setChannels(channels);
      } catch (error) {
        console.error("Error fetching channels:", error);
      }
    };

    fetchAllChannels();
  }, []);

  const handleChatClick = (channelId: any) => {
    console.log(channelId);
  };

  return (
    <div className="h-[95%] w-[25%] rounded-s-md bg-[#3F0E40] p-3">
      <div className="text-white text-start text-lg mb-8 px-2">Commune</div>
      <div className="px-4 text-white mb-4 text-sm flex gap-1 items-center justify-between">
        <div className="flex gap-1">
          <span>
            <ChevronDown size={18} />
          </span>{" "}
          <span>Direct messages</span>
        </div>
        <span>
          <AddUserDialog />
        </span>
      </div>
      <div className="h-[40%] flex flex-col gap-2">
        {channels.map((channel: any) => (
          <div
            key={channel.channelDetail.id}
            onClick={() => handleChatClick(channel.channelDetail.id)}
            className="user flex h-[15%] gap-2 items-center py-1 px-2 hover:bg-[#7A3274] rounded-sm cursor-pointer"
          >
            <div className="user-img h-full">
              <img
                className="h-full rounded-sm"
                src="https://github.com/shadcn.png"
                alt=""
              />
            </div>
            <div className="user-name text-white text-sm">
              {channel.channelDetail.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
