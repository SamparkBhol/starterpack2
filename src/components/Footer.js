import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentQuote, setCurrentQuote] = useState(0);

  const cheekyQuotes = [
    "Building the future, one commit at a time! 🚀",
    "Code is poetry, bugs are... abstract art? 🎨",
    "Coffee, code, repeat. Simple life formula! ☕",
    "Turning caffeine into code since 2020! ⚡",
    "Making computers do magic tricks! ✨",
    "Debugging: Being a detective in your own story! 🕵️",
    "Creating digital dreams with binary magic! 💫"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const quoteTimer = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % cheekyQuotes.length);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(quoteTimer);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 py-12 border-t border-purple-500/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <div className="flex justify-center">
              <div className="relative w-32 h-32 bg-white rounded-full shadow-2xl border-4 border-gray-300">
                {/* Clock face */}
                <div className="absolute inset-2 rounded-full bg-gray-100 flex items-center justify-center">
                  {/* Hour markers */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-6 bg-gray-800"
                      style={{
                        transform: `rotate(${i * 30}deg) translateY(-42px)`,
                        transformOrigin: 'center bottom'
                      }}
                    />
                  ))}
                  
                  {/* Hour hand */}
                  <div
                    className="absolute w-1 bg-gray-800 rounded-full origin-bottom z-20"
                    style={{
                      height: '25px',
                      bottom: '50%',
                      left: '50%',
                      transform: `translateX(-50%) rotate(${((currentTime.getHours() % 12) * 30) + (currentTime.getMinutes() * 0.5)}deg)`,
                      transformOrigin: 'bottom center'
                    }}
                  />
                  
                  {/* Minute hand */}
                  <div
                    className="absolute w-0.5 bg-gray-700 rounded-full origin-bottom z-10"
                    style={{
                      height: '35px',
                      bottom: '50%',
                      left: '50%',
                      transform: `translateX(-50%) rotate(${currentTime.getMinutes() * 6}deg)`,
                      transformOrigin: 'bottom center'
                    }}
                  />
                  
                  {/* Second hand */}
                  <div
                    className="absolute w-px bg-red-500 rounded-full origin-bottom z-30"
                    style={{
                      height: '38px',
                      bottom: '50%',
                      left: '50%',
                      transform: `translateX(-50%) rotate(${currentTime.getSeconds() * 6}deg)`,
                      transformOrigin: 'bottom center'
                    }}
                  />
                  
                  {/* Center dot */}
                  <div className="absolute w-3 h-3 bg-gray-800 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40" />
                </div>
                
                {/* Digital time below */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-mono bg-black/50 px-3 py-1 rounded">
                  {currentTime.toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-2xl shadow-xl inline-block">
              <div className="text-lg font-bold text-black animate-pulse">
                {cheekyQuotes[currentQuote]}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="text-center mb-4">
              <div className="text-3xl font-black text-white mb-2">
                SHREYAS KARTHIGEYAN
              </div>
              <div className="text-lg text-gray-400">
                Full-Stack Developer | AWS Certified | Problem Solver
              </div>
            </div>

            <div className="flex justify-center space-x-6 mb-6">
              <a href="mailto:shreyask750@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                📧 Email
              </a>
              <a href="https://linkedin.com/in/shreyas-k-731022286" className="text-gray-400 hover:text-cyan-400 transition-colors">
                💼 LinkedIn
              </a>
              <a href="https://github.com/shreyask750" className="text-gray-400 hover:text-cyan-400 transition-colors">
                🐙 GitHub
              </a>
            </div>

            <div className="text-gray-600 text-sm mb-4">
              <p className="mb-4">
                © 2025 Shreyas Karthigeyan. All rights reserved.
              </p>
              <div className="text-center">
                <p className="text-white font-bold text-lg mb-2">
                  🌟 Portfolio Credits & Attribution 🌟
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  This portfolio template was built using the amazing starterSpark framework
                </p>
                <p className="text-cyan-300 font-medium">
                  <a href="http://github.com/SamparkBhol/starterSpark" className="hover:text-cyan-200 transition-colors">
                    🔗 github.com/SamparkBhol/starterSpark
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;