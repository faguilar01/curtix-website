import { Link } from 'react-router-dom'

function Services() {
  const products = [
    {
      title: 'Roller Shades',
      description: 'Sleek and modern, perfect for any room. Available in light filtering and blackout options.',
      image: 'M4 6h16M4 12h16m-7 6h7'
    },
    {
      title: 'Roman Shades',
      description: 'Elegant folds that add timeless sophistication to any space.',
      image: 'M4 6h16M4 10h16M4 14h16M4 18h16'
    },
    {
      title: 'Wood Blinds',
      description: 'Classic warmth and natural beauty. Available in various finishes.',
      image: 'M4 6h16M4 12h8m-8 6h12'
    },
    {
      title: 'Vertical Blinds',
      description: 'Ideal for large windows and sliding doors. Easy to operate and maintain.',
      image: 'M4 6h16M4 18h16'
    },
    {
      title: 'Drapery',
      description: 'Luxurious fabric treatments for a refined and elegant look.',
      image: 'M4 4v16m16-16v16M4 4v16'
    },
    {
      title: 'Motorized Shades',
      description: 'Modern convenience with remote or smart home control.',
      image: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
    }
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of premium window treatments, handcrafted to perfection.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.image} />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-500 mb-6">{product.description}</p>
                <Link to="/contact" className="text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-600 transition">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Collection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-light text-center text-gray-900 mb-12">Shop by Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-8 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Blackout Shades</h3>
              <p className="text-gray-500 text-sm mb-4">Perfect for bedrooms and media rooms</p>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Shop Now →</Link>
            </div>
            <div className="bg-gray-100 p-8 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Light Filtering</h3>
              <p className="text-gray-500 text-sm mb-4">Soft natural light while maintaining privacy</p>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Shop Now →</Link>
            </div>
            <div className="bg-gray-100 p-8 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Energy Efficient</h3>
              <p className="text-gray-500 text-sm mb-4">Reduce energy costs year-round</p>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Shop Now →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-4">Need Help Choosing?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Our design experts are here to help you find the perfect window treatments for your space.
          </p>
          <Link to="/contact" className="bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services