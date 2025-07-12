import React, { useState } from 'react';

const ContactSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contacts = [
    {
      title: "📧 EMAIL",
      value: "shreyask750@gmail.com",
      link: "mailto:shreyask750@gmail.com",
      color: "from-red-500 to-pink-500",
      icon: "✉️"
    },
    {
      title: "📞 PHONE",
      value: "+91 7676996734",
      link: "tel:+917676996734", 
      color: "from-green-500 to-emerald-500",
      icon: "📱"
    },
    {
      title: "💼 LINKEDIN",
      value: "in/shreyas-k-731022286",
      link: "https://linkedin.com/in/shreyas-k-731022286",
      color: "from-blue-600 to-blue-500",
      icon: "🔗"
    },
    {
      title: "🐙 GITHUB",
      value: "github.com/shreyask750",
      link: "https://github.com/shreyask750",
      color: "from-gray-700 to-gray-500",
      icon: "👨‍💻"
    },
    {
      title: "📍 LOCATION",
      value: "Bangalore Urban, Karnataka, India",
      link: "#",
      color: "from-orange-500 to-yellow-500",
      icon: "🌍"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contacts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contacts.length) % contacts.length);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            📞 CONTACT ME 📞
          </h2>
          <p className="text-xl text-gray-300 font-semibold">
            🚀 LET'S BUILD SOMETHING AMAZING TOGETHER! 🚀
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-r from-purple-800 to-blue-800 p-8 rounded-3xl shadow-2xl border-2 border-white/20">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors text-white text-2xl"
              >
                ⬅️
              </button>
              
              <div className="text-center flex-1">
                <div className="text-sm font-bold text-gray-300 mb-2">
                  {currentSlide + 1} / {contacts.length}
                </div>
                <div className="flex justify-center space-x-2">
                  {contacts.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <button
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors text-white text-2xl"
              >
                ➡️
              </button>
            </div>

            <div className="text-center">
              <div className={`bg-gradient-to-r ${contacts[currentSlide].color} p-8 rounded-2xl shadow-xl transform transition-all duration-500`}>
                <div className="text-6xl mb-4">{contacts[currentSlide].icon}</div>
                <h3 className="text-2xl font-black text-white mb-4">
                  {contacts[currentSlide].title}
                </h3>
                <div className="text-lg font-semibold text-gray-100 mb-6">
                  {contacts[currentSlide].value}
                </div>
                
                {contacts[currentSlide].link !== "#" && (
                  <a
                    href={contacts[currentSlide].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 px-8 py-3 rounded-full text-white font-bold transition-colors inline-block"
                  >
                    🚀 CONTACT NOW 🚀
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 px-8 py-4 rounded-full text-white font-black text-xl inline-block animate-pulse">
              🔥 READY TO COLLABORATE 🔥
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSlider;