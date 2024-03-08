import { SendHorizontal } from "lucide-react";
import { sendMessage, getAllMessages } from "../hooks";
import { useEffect, useState } from "react";
import socket from "../config/socket-config";

const Message = ({ data }: any) => {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState();

  useEffect(() => {
    const fetchAllMessages = async () => {
      const res = await getAllMessages(data.channelId);
      setMessages(res);
      console.log(res);
    };

    fetchAllMessages();
  }, []);

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
        <div className="user flex h-full gap-2 items-center py-1 px-2">
          <div className="user-img h-[60%]">
            <img
              className="h-full rounded-sm"
              src="https://github.com/shadcn.png"
              alt=""
            />
          </div>
          <div className="font-bold text-lg">{data.channelName}</div>
        </div>
      </div>

      <div className="flex-1">
        <div>Messages will come here</div>
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
