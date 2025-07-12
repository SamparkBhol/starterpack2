import React, { useState } from 'react';

const Education = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const educationData = [
    {
      title: "Bachelor of Technology in Information Technology",
      institution: "Vellore Institute of Technology",
      location: "Vellore, TN",
      year: "2026",
      score: "8.86 CGPA",
      color: "from-purple-600 to-blue-600",
      icon: "🎓"
    },
    {
      title: "CBSE 12th",
      institution: "National Public School",
      location: "Bangalore, KA",
      year: "2022",
      score: "92.6%",
      color: "from-green-600 to-teal-600",
      icon: "📚"
    },
    {
      title: "CBSE 10th",
      institution: "National Public School", 
      location: "Bangalore, KA",
      year: "2020",
      score: "95.8%",
      color: "from-orange-600 to-red-600",
      icon: "📖"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            🎓 EDUCATION 🎓
          </h2>
          <p className="text-xl text-gray-300 font-semibold">
            📊 ACADEMIC EXCELLENCE & CONTINUOUS LEARNING 📊
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`bg-gradient-to-br ${edu.color} p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-rotate-2 border-2 border-white/20 relative overflow-hidden`}>
                {/* Score overlay that appears on hover */}
                <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏆</div>
                    <div className="text-4xl font-black text-yellow-400 mb-2">
                      {edu.score}
                    </div>
                    <div className="text-lg font-bold text-white">
                      SCORE ACHIEVED
                    </div>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{edu.icon}</div>
                  <h3 className="text-xl font-black text-white mb-2 leading-tight">
                    {edu.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <div className="text-lg font-bold text-white flex items-center">
                      🏫 {edu.institution}
                    </div>
                  </div>
                  
                  <div className="bg-white/20 p-3 rounded-xl">
                    <div className="text-md font-semibold text-gray-100 flex items-center">
                      📍 {edu.location}
                    </div>
                  </div>
                  
                  <div className="bg-white/20 p-3 rounded-xl">
                    <div className="text-md font-semibold text-gray-100 flex items-center">
                      📅 {edu.year}
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="bg-yellow-500 px-4 py-2 rounded-full text-black font-black text-sm animate-pulse">
                    🌟 HOVER TO SEE SCORE 🌟
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 rounded-full text-black font-black text-xl animate-bounce">
            🏆 CONSISTENT HIGH ACHIEVER 🏆
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;