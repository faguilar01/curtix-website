function Services() {
  const services = [
    {
      title: 'Window Blinds',
      description: 'Choose from a variety of blind styles including roller blinds, vertical blinds, Venetian blinds, and more. Our blinds are made from high-quality materials that are durable and easy to maintain.',
      features: ['Roller Blinds', 'Vertical Blinds', 'Venetian Blinds', 'Roman Blinds', 'Wooden Blinds']
    },
    {
      title: 'Window Curtains',
      description: 'Add elegance and warmth to any room with our custom-made curtains. We offer a wide selection of fabrics, colors, and patterns to match your decor.',
      features: ['Custom Measurements', 'Various Fabrics', 'Professional Hemming', 'Rod Pocket & Grommet', 'Blackout Options']
    },
    {
      title: 'Custom Fitting',
      description: 'Every window is unique. Our team provides precise measurements to ensure a perfect fit for your blinds and curtains.',
      features: ['Professional Measurement', 'Perfect Fit Guarantee', 'All Window Types', 'Special Shapes']
    },
    {
      title: 'Professional Installation',
      description: 'Our experienced installers ensure your window treatments are hung correctly and function smoothly.',
      features: ['Expert Installation', 'All Hardware Types', 'Clean & Efficient', 'Post-Install Check']
    }
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a complete range of blinds and curtains services to transform your windows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services