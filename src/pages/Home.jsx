import { Link } from 'react-router-dom'

function Home() {
  const products = [
    { name: 'Roller Shades', desc: 'Sleek, modern shades for any room', icon: 'M4 6h16M4 12h16m-7 6h7' },
    { name: 'Roman Shades', desc: 'Elegant folds with timeless appeal', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
    { name: 'Wood Blinds', desc: 'Classic warmth and natural beauty', icon: 'M4 6h16M4 12h8m-8 6h12' },
    { name: 'Drapery', desc: 'Luxurious fabric for a refined look', icon: 'M4 4v16m16-16v16M4 4v16' },
  ]

  const services = [
    { title: 'Free Design Consultation', desc: 'Get personalized guidance from our experts', link: '/contact' },
    { title: 'Free Window Measurement', desc: 'Professional measuring for perfect fit', link: '/contact' },
    { title: 'Professional Installation', desc: 'Expert installation by our trained team', link: '/contact' },
    { title: 'Order Free Samples', desc: 'Touch and feel our fabrics before you buy', link: '/contact' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Dress your windows with intention.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your space with premium custom window treatments. 
            Handcrafted with care, designed for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-gray-900 text-white px-8 py-4 rounded hover:bg-gray-800 transition">
              Get a Free Quote
            </Link>
            <Link to="/services" className="bg-white text-gray-900 px-8 py-4 rounded border border-gray-300 hover:bg-gray-50 transition">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Our Bestsellers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center text-gray-900 mb-12">Our Bestsellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link key={index} to="/services" className="group">
                <div className="bg-white aspect-square flex items-center justify-center mb-4 overflow-hidden">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.icon} />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center group-hover:text-gray-600 transition">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 text-center">{product.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Let us help bring your vision to life */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center text-gray-900 mb-12">Let us help bring your vision to life.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="text-center p-6 border border-gray-200 hover:border-gray-400 transition">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-4">A Custom Made Story</h2>
          <p className="text-xl text-gray-300 mb-4">"Our personal approach is born of passion, passed down through generations."</p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            All our custom window treatments are handmade to order by skilled craftsmen. 
            Every detail is considered, and every design engineered to endure.
          </p>
          <Link to="/about" className="text-white border-b border-white pb-1 hover:text-gray-300 transition">
            Read Our Story
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home