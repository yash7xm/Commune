import { SendHorizontal } from "lucide-react";

const Message = () => {
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
          <div className="font-bold text-lg">Yash Poonia</div>
        </div>
      </div>

        <div className="flex-1">
            <div>Messages will come here</div>
        </div>

      <div className="h-[10%] mx-4 my-2 rounded-md border">
        <form className="h-full px-3 flex items-center">
            <input type="text" placeholder="Message Yash Poonia" className="h-full w-[95%] outline-none flex-wrap"/>
            <button type="submit"><SendHorizontal /></button>
        </form>
      </div>
    </div>
  );
};

export default Message;
