import  { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatInterface from "./components/ChatInterface";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [selectedFile, setSelectedFile] = useState(null)

  return (
      <div className="flex flex-1 overflow-hidden flex h-[calc(100vh-40px)] bg-gray-100">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onFileSelect={setSelectedFile} />
        <main  className="flex flex-col w-full">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          <ChatInterface selectedFile={selectedFile} />
        </main>
      </div>
  )
}
export default App;