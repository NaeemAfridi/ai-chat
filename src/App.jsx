import  { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatInterface from "./components/ChatInterface";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [selectedFile, setSelectedFile] = useState(null)

  return (
    <div  className="flex h-screen bg-gray-100">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onFileSelect={setSelectedFile} />
        <main  className="flex flex-col w-full">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          <ChatInterface selectedFile={selectedFile} />
        </main>
      </div>
    </div>
  )
}
export default App;