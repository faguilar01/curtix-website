import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">About curtix</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted source for quality blinds and curtains in Elmwood Park, New Jersey.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">A Custom Made Story</h2>
              <p className="text-gray-600 mb-6">
                Welcome to curtix, your trusted local source for quality blinds and curtains in Elmwood Park, New Jersey.
              </p>
              <p className="text-gray-600 mb-6">
                We specialize in providing beautiful, functional window treatments that enhance the look and feel of your home or business. With years of experience in the industry, we understand that every customer has unique needs when it comes to window coverings.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to quality products, professional service, and customer satisfaction sets us apart. We work closely with each client to ensure they get the perfect window treatments for their space.
              </p>
            </div>
            <div className="bg-gray-200 aspect-square flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-light text-center text-gray-900 mb-12">Why Choose curtix?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Quality Products', desc: 'Sourced from trusted manufacturers' },
              { title: 'Custom Measurements', desc: 'Perfect fit for every window' },
              { title: 'Professional Installation', desc: 'Expert installation services' },
              { title: 'Competitive Pricing', desc: 'Quality within your budget' },
              { title: 'Friendly Service', desc: 'Knowledgeable staff ready to help' },
              { title: 'Local Presence', desc: 'Serving Elmwood Park and beyond' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and quote.
          </p>
          <Link to="/contact" className="bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About