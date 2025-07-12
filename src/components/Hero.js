import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden pt-20">
      {/* VSCode-like background */}
      <div className="absolute inset-0 bg-gray-900">
        {/* Code editor background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="text-green-400 font-mono text-xs leading-relaxed p-8">
            <div className="mb-2">1&nbsp;&nbsp;&nbsp;import React from 'react';</div>
            <div className="mb-2">2&nbsp;&nbsp;&nbsp;import './App.css';</div>
            <div className="mb-2">3&nbsp;&nbsp;&nbsp;</div>
            <div className="mb-2">4&nbsp;&nbsp;&nbsp;const Portfolio = () => {'{'};</div>
            <div className="mb-2">5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (</div>
            <div className="mb-2">6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="portfolio"&gt;</div>
            <div className="mb-2">7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Shreyas Karthigeyan&lt;/h1&gt;</div>
            <div className="mb-2">8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Full-Stack Developer&lt;/p&gt;</div>
            <div className="mb-2">9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</div>
            <div className="mb-2">10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);</div>
            <div className="mb-2">11&nbsp;&nbsp;&nbsp;{'}'};</div>
            <div className="mb-2">12&nbsp;&nbsp;&nbsp;</div>
            <div className="mb-2">13&nbsp;&nbsp;&nbsp;export default Portfolio;</div>
          </div>
        </div>
        
        {/* VSCode sidebar */}
        <div className="absolute left-0 top-0 w-16 h-full bg-gray-800 opacity-20"></div>
        
        {/* VSCode activity bar */}
        <div className="absolute left-0 top-0 w-12 h-full bg-gray-700 opacity-30"></div>
        
        {/* Terminal at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-black opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            SHREYAS
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            KARTHIGEYAN
          </h2>
          <div className="text-xl md:text-2xl text-gray-300 font-medium">
            🚀 JUNIOR DEVELOPER - EXPERT LEVEL | ML ENTHUSIAST 🚀
          </div>
          <div className="text-lg text-gray-400 mt-2">
            📍 Bangalore Urban, Karnataka, India
          </div>
        </div>

        <div className="mb-8 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          <p className="mb-4 font-semibold text-cyan-300">
            🔥 PASSIONATE • INNOVATIVE • CUTTING-EDGE TECHNOLOGY ENTHUSIAST 🔥
          </p>
          <p className="text-justify">
            Enthusiastic and motivated Computer Engineering graduate with a strong passion for coding, 
            software development, and problem-solving. Eager to contribute to a forward-thinking organization 
            that values innovation and learning. Seeking opportunities that offer hands-on experience, 
            professional growth, and the chance to make meaningful contributions to both the team and the industry.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="mailto:shreyask750@gmail.com" className="bg-gradient-to-r from-red-500 to-pink-500 px-8 py-3 rounded-full text-white font-bold hover:shadow-lg hover:shadow-red-500/25 transition-all transform hover:scale-105">
            📧 EMAIL ME
          </a>
          <a href="tel:+917676996734" className="bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-3 rounded-full text-white font-bold hover:shadow-lg hover:shadow-green-500/25 transition-all transform hover:scale-105">
            📞 CALL NOW
          </a>
          <a href="https://linkedin.com/in/shreyas-k-731022286" className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 rounded-full text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:scale-105">
            💼 LINKEDIN
          </a>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-full text-black font-black text-lg animate-bounce">
            🏆 AWS CERTIFIED CLOUD PRACTITIONER 🏆
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;