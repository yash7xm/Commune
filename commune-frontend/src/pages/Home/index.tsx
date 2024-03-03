import Auth from "../../components/auth";
import Chat from "../../components/chat";
import Message from "../../components/message";

const Home = () => {
  console.log(localStorage.getItem("auth"));
  return (
    <div className="h-screen w-screen p-3 bg-[#7A3274] ">
      {!localStorage.getItem("auth") ? (
        <div className="h-full w-full flex items-center justify-center">
          <Auth />
        </div>
      ) : (
        <div className="h-full w-full flex items-end justify-end">
          <Chat />
          <Message />
        </div>
      )}
    </div>
  );
};

export default Home;
