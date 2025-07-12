import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "💻 PROGRAMMING LANGUAGES",
      skills: ["C", "Java", "C++", "Python"],
      color: "from-blue-600 to-purple-600",
      icon: "⚡"
    },
    {
      title: "🎨 FRONTEND TECHNOLOGIES", 
      skills: ["HTML", "CSS", "JavaScript"],
      color: "from-green-600 to-teal-600",
      icon: "🖥️"
    },
    {
      title: "⚙️ BACKEND TECHNOLOGIES",
      skills: ["Node.js"],
      color: "from-red-600 to-pink-600", 
      icon: "🔧"
    },
    {
      title: "🗄️ DATABASE MANAGEMENT",
      skills: ["MySQL", "OracleSQL", "MongoDB"],
      color: "from-yellow-600 to-orange-600",
      icon: "💾"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
            🛠️ SKILLS & TECHNOLOGIES 🛠️
          </h2>
          <p className="text-xl text-gray-300 font-semibold">
            🚀 MASTERY ACROSS THE ENTIRE TECH STACK 🚀
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${category.color} p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 border-2 border-white/20`}>
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-black text-white mb-2">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="bg-white/20 p-2 rounded-lg text-center hover:bg-white/30 transition-colors group-hover:animate-pulse">
                      <span className="text-white font-bold text-xs">{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <div className="bg-black/30 px-4 py-2 rounded-full text-white font-bold text-sm">
                    ⭐ EXPERT LEVEL ⭐
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-red-500 to-yellow-500 px-8 py-4 rounded-full text-white font-black text-xl animate-pulse">
            🔥 FULL-STACK NINJA DEVELOPER 🔥
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 rounded-full text-white font-bold text-lg inline-block">
            🏅 AWS CERTIFIED CLOUD PRACTITIONER 🏅
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;