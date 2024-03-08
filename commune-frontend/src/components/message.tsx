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

  const imgSrc1 =
    "https://ca.slack-edge.com/T066456SPEU-U065HLFGW68-g7584f2534fe-72";
  const imgSrc2 =
    "https://ca.slack-edge.com/T066456SPEU-U069VD6QQET-gd922c621841-48";
  const imgSrc3 =
    "https://ca.slack-edge.com/T066456SPEU-U065C7K5Y0M-g5aea58345cb-24";

  return (
    <div className="h-[95%] w-[70%] bg-white rounded-r-md flex flex-col justify-between">
      {/* person you are talking to or the channel name */}
      <div className="h-[10%] border-b">
        <div className="user flex h-full gap-2 items-center py-1 px-3">
          <div className="user-img h-[24px] w-[24px]">
            <img
              className="h-full w-full rounded-sm"
              src={imgSrc2}
              alt="user-img"
            />
          </div>
          <div className="font-bold text-lg">{data.channelName}</div>
        </div>
      </div>

      {/* All the messages here */}
      <div className="flex-1 py-3 w-full">
        <div className="msg flex px-4 gap-2 w-full">
          <div className="left-side w-[18%]">
            <div className="user-img py-1 w-full">
              <img
                className=" size-[36px] w-full rounded-md"
                src="https://ca.slack-edge.com/T066456SPEU-U065HLFGW68-g7584f2534fe-72"
                alt="user-img"
              />
            </div>
          </div>
          <div className="right-side flex flex-col">
            <div className="user-detail flex gap-2 items-baseline">
              <span className="font-bold">Yash Poonia</span>
              <span className="text-muted-foreground text-xs">2:06 PM</span>
            </div>
            <div className="msg-content text-[15px]">
              This is just a sample message for you buddy This is just a sample
              message for you buddy This is just a sample message for you buddy
              This is just a sample message for you buddy This is just a sample
              message for you buddy This is just a sample message for you buddy
              This is just a sample message for you buddy This is just a sample
              message for you buddy This is just a sample message for you buddy
              This is just a sample message for you buddy This is just a sample
              message for you buddy This is just a sample message for you buddy
            </div>
          </div>
        </div>
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
