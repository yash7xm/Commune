import { SendHorizontal } from "lucide-react";
import { sendMessage, getAllMessages } from "../hooks";
import { useEffect, useState } from "react";
import socket from "../config/socket-config";
import { images } from "../utils/images";
import MsgComp from "./msg-component";

const Message = ({ data }: any) => {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchAllMessages = async () => {
      const res = await getAllMessages(data.channelId);
      setMessages(res);
      console.log(res);
    };

    fetchAllMessages();
  }, [data]);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const msgData = {
      channelId: data.channelId,
      message: msg,
      time: "2024-03-07 18:21:58",
    };
    const res = await sendMessage(msgData);
    console.log(res);
  };

  socket.on("msg_rcvd", (data) => {
    console.log(data);
  });

  return (
    <div className="h-[95%] w-[70%] bg-white rounded-r-md flex flex-col justify-between">
      {/* person you are talking to or the channel name */}
      <div className="h-[10%] border-b">
        <div className="user flex h-full gap-2 items-center py-1 px-3">
          <div className="user-img h-[24px] w-[24px]">
            <img
              className="h-full w-full rounded-sm"
              src={images[Math.floor(Math.random() * 3)]}
              alt="user-img"
            />
          </div>
          <div className="font-bold text-lg">{data.channelName}</div>
        </div>
      </div>

      {/* All the messages here */}
      <div className="flex-1 py-3 w-full">
        {messages.map((msg, index) => (
          <MsgComp key={index} msg={msg} index={index} />
        ))}
      </div>

      <div className="h-[10%] mx-4 my-2 rounded-md border">
        <form
          className="h-full px-3 flex items-center"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            placeholder={"Message" + " " + data.channelName}
            className="h-full w-[95%] outline-none flex-wrap"
            value={msg}
            onChange={(e: any) => setMsg(e.target.value)}
          />
          <button type="submit">
            <SendHorizontal />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
