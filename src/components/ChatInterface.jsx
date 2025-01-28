import { useState } from "react"
import { ArrowUp} from "lucide-react"


export default function ChatInterface({ selectedFile }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      // Here you would typically send the message to your AI backend
      // For now, we'll just simulate a response
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "I'm an AI assistant. How can I help you?", isUser: false }])
      }, 1000)
      setInput("")
    }
  }

  return (
    <div className="flex flex-col h-full bg-gray-50 w-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-3 ${message.isUser ? "bg-blue-500 text-white" : "bg-white"}`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-200 w-full md:w-1/2 lg:w-1/2 rounded-lg mx-auto p-4">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="w-full bg-gray-200 outline-none"
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

