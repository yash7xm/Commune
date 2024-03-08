import { SendHorizontal } from "lucide-react";
import { sendMessage, getAllMessages } from "../hooks";
import { useEffect, useRef, useState } from "react";
import socket from "../config/socket-config";
import { images } from "../utils/images";
import MsgComp from "./msg-component";
import { pseudoMessage } from "../utils/message";

const Message = ({ data }: any) => {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState<any>([]);
  const [userPhoto, setUserPhoto] = useState<number>(0);
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchAllMessages = async () => {
      const res = await getAllMessages(data.channelId);
      setMessages(res);
    };

    setUserPhoto(Math.floor(Math.random() * 3));
    fetchAllMessages();
  }, [data]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const msgData = {
      channelId: data.channelId,
      message: msg,
      time: "2024-03-07 18:21:58",
    };

    pseudoMessage.message = msg;
    setMessages((prevMessages: any) => [...prevMessages, pseudoMessage]);
    await sendMessage(msgData);
    setMsg("");
  };

  socket.on("msg_rcvd", (receivedData) => {
    setMessages((prevMessages: any) => {
      const updatedMessages = [...prevMessages];
      updatedMessages[updatedMessages.length - 1] = receivedData;
      return updatedMessages;
    });
  });

  return (
    <div className="h-[95%] w-[70%] bg-white rounded-r-md flex flex-col justify-between">
      {/* person you are talking to or the channel name */}
      <div className="h-[10%] border-b">
        <div className="user flex h-full gap-2 items-center py-1 px-3">
          <div className="user-img h-[24px] w-[24px]">
            <img
              className="h-full w-full rounded-sm"
              src={images[userPhoto]}
              alt="user-img"
            />
          </div>
          <div className="font-bold text-lg">{data.channelName}</div>
        </div>
      </div>

      {/* All the messages here */}
      <div className="flex-1 py-3 w-full overflow-y-auto">
        {messages.map((msg: any, index: number) => (
          <MsgComp key={index} msg={msg} index={index} />
        ))}
        <div ref={messageEndRef} />
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
