import { Menu } from "lucide-react"


export default function Header({ onMenuClick }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button onClick={onMenuClick} className="text-gray-500 hover:text-gray-600">
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">AI Chat App</h1>
          <div className="w-6"></div> {/* Placeholder for right-side content if needed */}
        </div>
      </div>
    </header>
  )
}

