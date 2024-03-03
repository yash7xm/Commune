import { ChevronDown } from "lucide-react";

const Chat = () => {
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
        <div className="user flex h-[15%] gap-2 items-center py-1 px-2 hover:bg-[#7A3274] rounded-sm cursor-pointer">
          <div className="user-img h-full">
            <img
              className="h-full rounded-sm"
              src="https://github.com/shadcn.png"
              alt=""
            />
          </div>
          <div className="user-name text-white text-sm">Yash Poonia</div>
        </div>
        <div className="user flex h-[15%] gap-2 items-center py-1 px-2 hover:bg-[#7A3274] rounded-sm cursor-pointer">
          <div className="user-img h-full">
            <img
              className="h-full rounded-sm"
              src="https://github.com/shadcn.png"
              alt=""
            />
          </div>
          <div className="user-name text-white text-sm">Yash Poonia</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
