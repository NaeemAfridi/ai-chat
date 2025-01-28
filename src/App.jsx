import  { useState } from "react";
import FileUpload from "./components/FileUpload";
import ChatSidebar from "./components/ChatSidebar";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const App = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="p-4 border-b border-gray-300 dark:border-gray-700 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Chat App</h1>
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </header>
        <main className="p-4">
          <FileUpload onFileUpload={(files) => setFiles(files)} />
          <div className="mt-4">
            {files.map((file, index) => (
              <button
                key={index}
                onClick={() => setSelectedFile(file)}
                className="p-2 m-2 bg-blue-500 text-white rounded-lg"
              >
                Chat with {file.name}
              </button>
            ))}
          </div>
          {selectedFile && (
            <ChatSidebar file={selectedFile} onClose={() => setSelectedFile(null)} />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;