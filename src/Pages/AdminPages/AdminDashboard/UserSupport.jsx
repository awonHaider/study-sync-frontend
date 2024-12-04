import React from "react";
import { FaPaperclip, FaSmile } from "react-icons/fa";
import { PiPaperPlaneRightFill } from "react-icons/pi";

const UserSupport = () => {
  const chats = Array(13).fill({
    name: "Ali Hussein",
    time: "10 MINS AGO",
    message:
      "Lorem ipsum dolor sit amet consectetur. Massa in pretium accumsan dolor ac. Suscipit malesuada enim mi tortor",
  });

  const messages = [
    { type: "incoming", name: "Ali Hussein", text: "Hello is anybody here ?" },
    {
      type: "incoming",
      name: "Ali Hussein",
      text: "I have been writing since yesterday and nobody is replying me",
    },
    { type: "outgoing", text: "Hello" },
    { type: "outgoing", text: "Hello" },
    { type: "outgoing", text: "Hello" },
    { type: "outgoing", text: "Hello" },
    { type: "outgoing", text: "Hello" },
  ];

  return (
    <>
      <section className="p-4">
        <h1 className=" font-bold mb-5">User Support Messages</h1>

        <div className="grid grid-cols-10 gap-4">
          {/* Left Side */}
          <div className="col-span-5 h-[80vh] rounded-lg overflow-hidden p-4 border">
            <div className="rounded-lg h-full flex flex-col">
              <div className="overflow-y-auto flex-1 space-y-2 scrollbar-thin scrollbar-track-gray-200 hover:scrollbar-thumb-blue-600">
                {chats.map((chat, index) => (
                  <div
                    key={index}
                    className="border flex items-start space-x-3 p-3 mr-3 rounded transition-colors duration-200 hover:bg-blue-50"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#42114A] text-white flex items-center justify-center font-bold">
                      AH
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="text-md font-bold text-gray-800">
                          {chat.name}
                        </h4>
                        <span className="text-xs text-[#434343]">
                          {chat.time}
                        </span>
                      </div>
                      <p className="text-[#545454] text-sm">{chat.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-5 h-[80vh] rounded-lg p-4 border">
            <div className="flex flex-col justify-between h-full">
              {/* Title */}
              <div className="py-2 mb-2 border-b flex items-center gap-2 font-bold">
                <div className="w-10 h-10 rounded-full bg-[#42114A] text-white flex items-center justify-center font-bold">
                  AH
                </div>
                Ali Hussein
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 scrollbar-thin scrollbar-track-gray-200 hover:scrollbar-thumb-blue-600">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex mr-3 ${
                      message.type === "outgoing"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {/* Incoming Message */}
                    {message.type === "incoming" && (
                      <div className="flex items-start space-x-2">
                        <div className="bg-gray-100 rounded-lg p-3 shadow-sm text-gray-800">
                          <h4 className="text-sm font-semibold mb-1">
                            {message.name}
                          </h4>
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    )}

                    {/* Outgoing Message */}
                    {message.type === "outgoing" && (
                      <div className="bg-blue-100 rounded-lg p-3 shadow-sm text-gray-800">
                        <p className="text-sm">{message.text}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input Section */}
              <div className="mt-2">
                <form>
                  <label htmlFor="chat" className="sr-only">
                    Your message
                  </label>
                  <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50">
                    {/* Upload Button */}
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                    >
                      <FaPaperclip className="w-5 h-5" />
                      <span className="sr-only">Upload image</span>
                    </button>

                    {/* Emoji Button */}
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                    >
                      <FaSmile className="w-5 h-5" />
                      <span className="sr-only">Add emoji</span>
                    </button>

                    {/* Textarea */}
                    <textarea
                      id="chat"
                      rows="1"
                      className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your message..."
                    ></textarea>

                    {/* Send Button */}
                    <button
                      type="submit"
                      className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100"
                    >
                      <PiPaperPlaneRightFill className="w-5 h-5" />
                      <span className="sr-only">Send message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserSupport;
