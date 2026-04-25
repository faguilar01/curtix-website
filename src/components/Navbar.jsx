import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-medium text-gray-900">
              curtix
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-500 hover:text-gray-900 text-sm">Products</Link>
            <Link to="/about" className="text-gray-500 hover:text-gray-900 text-sm">About</Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-900 text-sm">Contact</Link>
            <Link to="/contact" className="bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Products</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</Link>
            <Link to="/contact" className="block px-3 py-2 bg-gray-900 text-white text-center mt-2">Get Quote</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar