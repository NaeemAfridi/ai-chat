import  { useState } from "react";

const FileUpload = ({ onFileUpload }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    onFileUpload(selectedFiles); // Pass files to parent component
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg dark:border-gray-700">
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-200"
      />
      <div className="mt-2">
        {files.map((file, index) => (
          <div key={index} className="text-sm text-gray-700 dark:text-gray-300">
            {file.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;