import React, { useState } from "react";
import { FaRegSmile, FaPaperclip, FaRegImage, FaVideo } from "react-icons/fa";
import studySyncLogo from "../../Images/Logo/studySyncLogoMain.png";
const Support = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello is anybody here ?", sender: "user" },
    {
      id: 2,
      text: "I have been writing since yesterday and nobody is replying me",
      sender: "user",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { id: Date.now(), text: newMessage, sender: "user" },
      ]);
      setNewMessage("");
    }
  };

  return (
    // <div className="w-full h-full bg-gray-50 p-4 rounded-lg shadow-md">
    <div className="w-full ">
      <h2 className="text-xl font-bold mb-6 text-[#8A8A8A]">Support</h2>
      <div className="flex h-fit flex-col border border-[#EBEBEB] rounded-md overflow-hidden">
        {/* Chat Header */}
        <div className="bg-white p-4 border-b flex items-center space-x-2">
          <div className="w-12">
            <img src={studySyncLogo} alt="Website Logo" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">
            StudySync Support Chat
          </h3>
        </div>

        {/* Messages */}
        <div className="flex flex-col space-y-4 overflow-y-auto bg-white pb-20 p-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={` flex  ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`${
                  message.sender === "user"
                    ? "bg-[#F6F7F9] "
                    : "bg-blue-500 text-white"
                } p-3 rounded-lg max-w-xs shadow`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex flex-col items-center gap-2 p-4 border-t bg-white ">
          {/* Input */}
          <textarea
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type here ......."
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <div className="flex w-full flex-row justify-between items-center">
            {/* Icons */}
            <div className="flex gap-2 ml-1">
              <button className="text-gray-500 hover:text-blue-500">
                <FaRegImage className="text-lg" />
              </button>
              <button className="text-gray-500 hover:text-blue-500">
                <FaPaperclip className="text-lg" />
              </button>
              <button className="text-gray-500 hover:text-blue-500">
                <FaRegSmile className="text-lg" />
              </button>
              <button className="text-gray-500 hover:text-blue-500">
                <FaVideo className="text-lg" />
              </button>
            </div>

            {/* Send Button */}
            <button
              onClick={handleSendMessage}
              className="bg-[#006BDE] text-white px-4 py-2 rounded-lg text-xs"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
