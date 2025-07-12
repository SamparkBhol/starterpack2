import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "SAP and ERP Functional Intern",
      company: "Hansai IT Solutions",
      period: "June 2025 - Present",
      description: [
        "Acquired hands-on experience with the SAP MM module, focusing on end-to-end procurement processes.",
        "Improved supply chain efficiency by streamlining purchase orders and inventory control workflows.",
        "Managed and maintained master data to support accurate and timely purchasing operations."
      ],
      skills: ["SAP MM", "ERP", "Supply Chain", "Procurement", "Master Data Management"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "DevOps and Automation Intern",
      company: "DigitalXC",
      period: "June 2024 - July 2024",
      description: [
        "Worked on AWS and Ansible under the DevOps and Automation team during the summer of 2024.",
        "Underwent training on AWS, Ansible and Terraform and performed tasks on various use-cases.",
        "Automated infrastructure provisioning and configuration management tasks using Ansible playbooks and Terraform modules to enhance deployment efficiency."
      ],
      skills: ["AWS", "Ansible", "Terraform", "DevOps", "Infrastructure Automation", "CI/CD"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            💼 EXPERIENCE 💼
          </h2>
          <p className="text-xl text-gray-300 font-semibold">
            🚀 BUILDING THE FUTURE WITH CUTTING-EDGE TECHNOLOGY 🚀
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className={`bg-gradient-to-r ${exp.color} p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20`}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-black text-white mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-2xl font-bold text-gray-100 mb-2">
                      🏢 {exp.company}
                    </h4>
                    <div className="text-lg font-semibold text-gray-200 mb-4 bg-black/30 px-4 py-2 rounded-full inline-block">
                      📅 {exp.period}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-xl font-bold text-white mb-4">🎯 KEY ACHIEVEMENTS:</h5>
                    <ul className="space-y-2">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-gray-100 font-medium flex items-start">
                          <span className="text-yellow-300 mr-2 text-xl">✨</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;