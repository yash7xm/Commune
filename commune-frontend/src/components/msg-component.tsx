import { images } from "../utils/images";
import { formatTime } from "../utils/date-time";

const MsgComp = ({ msg, index }: any) => {
  return (
    <div className="msg flex px-4 gap-2 w-full mb-2">
      <div className="left-side w-[4%]">
        <div className="user-img py-1 w-full">
          <img
            className="h-[36px] w-full rounded-md"
            src={index % 2 == 0 ? images[0] : images[1]}
            alt="user-img"
          />
        </div>
      </div>
      <div className="right-side flex flex-col">
        <div className="user-detail flex gap-2 items-baseline">
          <span className="font-bold text-sm">{msg.userDetail.name}</span>
          <span className="text-muted-foreground text-xs">
            {formatTime(msg.createdAt)}
          </span>
        </div>
        {msg.type ? (
          <div className="msg-content text-[15px] text-muted-foreground">
            {msg.message}
          </div>
        ) : (
          <div className="msg-content text-[15px]">{msg.message}</div>
        )}
      </div>
    </div>
  );
};

export default MsgComp;
