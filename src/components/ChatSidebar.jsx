import  { useState } from "react";
import { XMarkIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/solid";

const ChatSidebar = ({ file, onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "This is a sample AI response.", sender: "ai" },
        ]);
      }, 1000);
      setInput("");
    }
  };

  return (
    <div
      className={`fixed right-0 bottom-0 w-96 bg-white dark:bg-gray-800 shadow-lg rounded-tl-lg rounded-bl-lg transition-all ${
        isMinimized ? "h-16" : "h-[500px]"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200">
          Chat with {file.name}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            {isMinimized ? (
              <ArrowsPointingOutIcon className="h-5 w-5" />
            ) : (
              <ArrowsPointingInIcon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {!isMinimized && (
        <div className="p-4 h-[calc(100%-120px)] overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      )}
      {!isMinimized && (
        <div className="p-4 border-t border-gray-300 dark:border-gray-700">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message..."
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </div>
      )}
    </div>
  );
};

export default ChatSidebar;