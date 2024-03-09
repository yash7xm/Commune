import { SendHorizontal } from "lucide-react";
import { sendMessage, getAllMessages } from "../hooks";
import { useEffect, useRef, useState } from "react";
import socket from "../config/socket-config";
import { images } from "../utils/images";
import MsgComp from "./msg-component";
import { pseudoMessage } from "../utils/message";
import { getCurrentDateTime } from "../utils/date-time";
import { useAtomValue } from "jotai";
import { activeChannelAtom } from "../atoms/channels-atom";

const Message = () => {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState<any>([]);
  const [userPhoto, setUserPhoto] = useState<number>(0);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const activeChannel = useAtomValue(activeChannelAtom);

  useEffect(() => {
    const fetchAllMessages = async () => {
      const res = await getAllMessages(activeChannel[0]);
      setMessages(res);
    };
    console.log("data vala use effect");

    setUserPhoto(Math.floor(Math.random() * 3));
    fetchAllMessages();
  }, [activeChannel]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const msgData = {
      channelId: activeChannel[0],
      message: msg,
      time: getCurrentDateTime(),
    };

    pseudoMessage.message = msg;
    setMessages((prevMessages: any) => [...prevMessages, pseudoMessage]);
    const res = await sendMessage(msgData);
    if (res.success) {
      setMsg("");
    }
  };

  useEffect(() => {
    const handleMsgReceived = (receivedData: any) => {
      console.log(receivedData.channelId, activeChannel[0]);
      if (receivedData.channelId === activeChannel[0]) {
        setMessages((prevMessages: any) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1] = receivedData;
          return updatedMessages;
        });
      }
    };

    socket.on("msg_rcvd", handleMsgReceived);

    return () => {
      socket.off("msg_rcvd", handleMsgReceived);
    };
  }, [socket, activeChannel]);

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
          <div className="font-bold text-lg">{activeChannel[1]}</div>
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
            placeholder={"Message" + " " + activeChannel[1]}
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
