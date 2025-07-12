import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "🔬 Research Paper",
      description: "Published research in Elsevier journal on a novel routing algorithm for Wireless Sensor Networks (WSN).",
      details: [
        "Developed an energy-efficient algorithm capable of operating effectively in large-scale deployment areas, significantly exceeding the scale addressed in previous research.",
        "Simulated and validated the algorithm across various topologies and node densities to demonstrate scalability and energy efficiency in diverse real-world scenarios."
      ],
      technologies: ["WSN", "Algorithm Design", "Simulation", "Energy Efficiency"],
      color: "from-emerald-500 to-teal-500",
      icon: "🧪",
      hasLink: true,
      link: "https://tinyurl.com/yc33cawk",
      linkText: "📖 READ RESEARCH PAPER"
    },
    {
      title: "🌿 LeafGuard AI", 
      description: "Built an AI-powered plant health diagnosis tool using computer vision to identify leaf diseases, improving agricultural awareness and early detection of plant issues.",
      details: [
        "Integrated Google Maps API to provide users with real-time locations of nearby nurseries and gardening services, enhancing user utility and actionable insights.",
        "Developed a responsive frontend with React and Tailwind, showcasing full-stack skills, API integration, and user-centric design."
      ],
      technologies: ["AI/ML", "Computer Vision", "React", "Tailwind CSS", "Google Maps API"],
      color: "from-green-500 to-emerald-500",
      icon: "🤖"
    },
    {
      title: "📊 YouTube Predictive Analysis",
      description: "Built a Neural network model to predict subscriber count based on video metadata and performance metrics.",
      details: [
        "Applied a Random Forest Regressor on a second dataset to perform predictive analysis and identify key features influencing view count.",
        "Preprocessed large datasets, tuned hyperparameters, and evaluated models using metrics like RMSE and R² to ensure robust performance."
      ],
      technologies: ["Machine Learning", "Neural Networks", "Random Forest", "Data Preprocessing", "Python", "Data Science"],
      color: "from-red-500 to-pink-500",
      icon: "📈"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            🚀 PROJECTS 🚀
          </h2>
          <p className="text-xl text-gray-300 font-semibold">
            ⚡ INNOVATIVE SOLUTIONS & BREAKTHROUGH TECHNOLOGIES ⚡
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className={`bg-gradient-to-br ${project.color} p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 border-2 border-white/20`}>
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{project.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-2">
                    {project.title}
                  </h3>
                </div>

                <div className="mb-4">
                  <p className="text-white font-semibold text-lg mb-4 text-center">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">🎯 KEY FEATURES:</h4>
                  <ul className="space-y-2">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-100 font-medium flex items-start text-sm">
                        <span className="text-yellow-300 mr-2">⭐</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">🛠️ TECH STACK:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-white font-semibold text-xs hover:bg-white/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 text-center">
                  {project.hasLink ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/30 hover:bg-white/40 px-6 py-3 rounded-full text-white font-bold text-sm transition-all duration-300 transform hover:scale-105 inline-block mb-2"
                    >
                      {project.linkText}
                    </a>
                  ) : (
                    <div className="bg-black/30 px-4 py-2 rounded-full text-white font-bold text-sm">
                      ⚡ PRODUCTION READY ⚡
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;