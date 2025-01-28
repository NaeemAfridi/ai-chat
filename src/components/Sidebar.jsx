import { X, Upload, MessageSquare } from "lucide-react"



export default function Sidebar({ isOpen, onClose, onFileSelect }) {
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      // Here you would typically upload the file to your server
      // For now, we'll just pass it to the parent component
      onFileSelect(file)
    }
  }

  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-20`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <label
              htmlFor="file-upload"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer"
            >
              <Upload className="h-5 w-5 mr-2" />
              Upload File
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
            />
          </li>
          <li>
            <button className="flex items-center w-full p-2 text-gray-600 hover:bg-gray-100 rounded">
              <MessageSquare className="h-5 w-5 mr-2" />
              Chat AI
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

