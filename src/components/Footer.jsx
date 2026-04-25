import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">curtix</h3>
            <p className="text-gray-500 text-sm">
              Your trusted source for quality blinds and curtains in Elmwood Park, New Jersey.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wide">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-500 hover:text-gray-900 text-sm">Window Shades</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-gray-900 text-sm">Blinds</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-gray-900 text-sm">Drapery</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-gray-900 text-sm">Motorized</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-500 hover:text-gray-900 text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-gray-900 text-sm">Services</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-gray-900 text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wide">Support</h3>
            <p className="text-gray-500 text-sm">Elmwood Park, New Jersey</p>
            <p className="text-gray-500 text-sm mt-2">info@curtix.com</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} curtix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer