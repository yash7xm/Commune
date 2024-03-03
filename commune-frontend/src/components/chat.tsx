const Chat = () => {
  return (
    <div className="h-[95%] w-[25%] rounded-s-md bg-[#3F0E40] p-3">
      <div className="text-white text-start text-lg mb-8">Commune</div>
      <div className="user flex h-[5%] gap-2 items-center">
        <div className="user-img h-full rounded-lg">
          <img className="h-full rounded-lg" src="https://github.com/shadcn.png" alt="" />
        </div>
        <div className="user-name text-white text-sm">Yash Poonia</div>
      </div>
    </div>
  );
};

export default Chat;
