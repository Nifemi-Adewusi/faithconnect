/* eslint-disable react/prop-types */
import filter from "./chat-images/filter.png";
import image1 from "./chat-images/Image.png";
import image2 from "./chat-images/Image-2.png";
import image3 from "./chat-images/Image-3.png";
import image4 from "./chat-images/Image-4.png";
import image5 from "./chat-images/Image-5.png";
import image6 from "./chat-images/Image-6.png";
import image7 from "./chat-images/Image-8.png";
import image8 from "./chat-images/Image-9.png";
import image9 from "./chat-images/Image-10.png";
import image10 from "./chat-images/Image-11.png";
import people from "./chat-images/people.png";
import Call from "./chat-images/Call.png";
import Group from "./chat-images/Group.png";
import arrow from "./chat-images/arrow.png";
// import Search from "./Search";
import Search from "./chat-images/Search.png";
import camera from "./chat-images/camera.png";
import sound from "./chat-images/sound.png";
import files from "./chat-images/files.png";
import { useEffect, useState } from "react";

const messages = [
  {
    imgSrc: image1,
    userName: "Josh Jones",
    userMessage: "Hey this is Josh Jones from bible study",
  },
  {
    imgSrc: image2,
    userName: "John Doe",
    userMessage: "Wil do, super, thank you",
  },
  {
    imgSrc: image3,
    userName: "Yvonne Light",
    userMessage: "Uploaded file",
  },
  {
    imgSrc: image4,
    userName: "Fajek",
    userMessage: "Here's a tutorial, if you...",
  },
  {
    imgSrc: image5,
    userName: "Joanna Shully",
    userMessage: "😅",
  },
  {
    imgSrc: image6,
    userName: "MC Bastek",
    userMessage: "Fasting begins soon!",
  },
  {
    imgSrc: image7,
    userName: "Mary Ceaser",
    userMessage: "Could you share the bible plan",
  },
  {
    imgSrc: image8,
    userName: "Marilyn Jones",
    userMessage: "I need to get a new bible",
  },
  {
    imgSrc: image9,
    userName: "Christopher Campbell",
    userMessage: "Service is live now!",
  },
  {
    imgSrc: image10,
    userName: "Gabriella Josephine",
    userMessage: "When does a new plan start?",
  },
];

const Chats = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  return (
    <div>
      {/* Conditional Rendering */}
      {selectedChat ? (
        <ChatDetails
          chat={selectedChat}
          goBack={() => setSelectedChat(null)} // Go back to chat list
        />
      ) : (
        <div>
          <div className="flex items-center justify-between max-[613px]:px-4 px-20 mt-3">
            <h1 className="font-bold text-2xl">Chats</h1>
            <img src={people} alt="people icon" />
          </div>
          {/* Search Bar */}
          <div className="flex justify-center items-center">
            <div className="relative w-3/5 max-[600px]:w-[95%] mt-5 ml-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-[#EDEBEB] focus:ring-blue-500 flex flex-col justify-center"
              />
              <img
                src={Search}
                alt="search icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[21.05px] h-[40px] text-gray-400"
              />
            </div>
          </div>
          {/* Chat List */}
          <div className="mt-4">
            {messages.map((message) => (
              <Chat
                key={message.userName}
                {...message}
                onClick={() => setSelectedChat(message)} // Set selected chat
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Chats;

function Chat({ imgSrc, userName, userMessage, onClick }) {
  return (
    <div
      className="flex items-center mb-8 gap-4 cursor-pointer "
      onClick={onClick}
    >
      <img className="w-[70.13px] h-[75.91px]" src={imgSrc} alt="" />
      <div>
        <p className="font-bold">{userName}</p>
        <p>{userMessage}</p>
      </div>
    </div>
  );
}

function ChatDetails({ chat, goBack }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: chat.userMessage, sender: "other" },
  ]);
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Add the new message to the list.
    setMessages([...messages, { text: message, sender: "user" }]);
    setMessage("");
  };
  const [deviceHeight, setDeviceHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setDeviceHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative " style={{ height: `${deviceHeight}px` }}>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center gap-4 px-5">
          <img onClick={goBack} className="cursor-pointer" src={arrow} alt="" />
          <img src={chat.imgSrc} alt="" />
          <div>
            <p className="font-bold">{chat.userName}</p>
            <p>Active 1min ago</p>
          </div>
        </div>
        <div className="flex gap-4 px-8">
          <img src={Call} className="cursor-pointer" alt="" />
          <img src={Group} className="cursor-pointer" alt="" />
        </div>
      </div>
      <hr className="h-2 bg-mainTheme mt-4 mb-3" />
      {/* <p className="w-[189.91px] text-white rounded-[20px] bg-[#373E4E] px-3 py-2 ml-3 ">
        {chat.userMessage}
      </p>
      <p>{message}</p> */}

      {/* Messages Section */}

      <div className="flex flex-col gap-2 p-4 overflow-y-auto h-[550px]">
        {messages.map((msg, index) => {
          return (
            <p
              key={index}
              className={`max-w-[60%] px-3 py-2 text-white rounded-[20px] ${
                msg.sender === "user"
                  ? "bg-mainTheme  self-end" // Right-aligned for user
                  : "bg-[#373E4E]  self-start" // Left-aligned for other
              }`}
            >
              {msg.text}
            </p>
          );
        })}
      </div>

      <div className=" absolute bottom-0 w-full flex justify-center ">
        <form className="flex items-center gap-5" onSubmit={handleSendMessage}>
          <img src={files} alt="" />
          <input
            type="text"
            placeholder="Write Message"
            className=" border-[2px] border-gray-400 px-28 w-full py-4 rounded-xl"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="bg-mainTheme text-white px-4 py-1 rounded-lg">
            Send
          </button>
          <img src={camera} alt="" />
          <img src={sound} alt="" />
        </form>
      </div>
    </div>
  );
}