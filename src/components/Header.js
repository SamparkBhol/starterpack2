import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-md z-30 border-b border-purple-500/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            SHREYAS.DEV
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Home</a>
            <a href="#experience" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Projects</a>
            <a href="#education" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Education</a>
            <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Contact</a>
          </nav>
          <div className="flex space-x-4">
            <a href="mailto:shreyask750@gmail.com" className="bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all">
              Hire Me!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;