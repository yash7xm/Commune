import Chat from "../../components/chat";
import Message from "../../components/message";

const Home = () => {
  return (
    <div className="h-screen w-screen p-3 bg-[#7A3274] flex items-end justify-end">
      <Chat />
      <Message />
    </div>
  );
};

export default Home;
