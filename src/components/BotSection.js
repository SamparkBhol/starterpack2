import React, { useState, useEffect } from 'react';

const BotSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [botTyping, setBotTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);

  const questions = [
    {
      id: 1,
      question: "What's your email?",
      answer: "📧 My email is shreyask750@gmail.com - Feel free to reach out anytime!",
      icon: "📧",
      color: "from-blue-500 to-cyan-500",
      category: "contact"
    },
    {
      id: 2, 
      question: "What's your GitHub?",
      answer: "🐙 You can find my code at github.com/shreyask750 - Check out my awesome projects!",
      icon: "🐙",
      color: "from-gray-700 to-gray-500",
      category: "contact"
    },
    {
      id: 3,
      question: "What is the capital of India?",
      answer: "🇮🇳 The capital of India is New Delhi, a beautiful metropolitan city!",
      icon: "🇮🇳",
      color: "from-orange-500 to-green-500",
      category: "general"
    },
    {
      id: 4,
      question: "What is 2 + 2?",
      answer: "🧮 2 + 2 = 4! Math is fun, just like coding!",
      icon: "🧮",
      color: "from-purple-500 to-pink-500",
      category: "general"
    },
    {
      id: 5,
      question: "Who invented the computer?",
      answer: "💻 Charles Babbage is known as the father of the computer for his analytical engine!",
      icon: "💻",
      color: "from-yellow-500 to-red-500",
      category: "general"
    },
    {
      id: 6,
      question: "What is the largest planet?",
      answer: "🪐 Jupiter is the largest planet in our solar system - it's absolutely massive!",
      icon: "🪐",
      color: "from-indigo-500 to-purple-500",
      category: "general"
    },
    {
      id: 7,
      question: "What's your phone number?",
      answer: "📱 You can call me at +91 7676996734 - I'm always happy to chat!",
      icon: "📱",
      color: "from-green-500 to-teal-500",
      category: "contact"
    },
    {
      id: 8,
      question: "What programming languages do you know?",
      answer: "💻 I code in C, Java, C++, Python, and JavaScript! Always learning more!",
      icon: "⚡",
      color: "from-blue-600 to-purple-600",
      category: "tech"
    },
    {
      id: 9,
      question: "What's your favorite technology?",
      answer: "🚀 I love React and AWS! Building scalable applications is my passion!",
      icon: "🚀",
      color: "from-cyan-500 to-blue-500",
      category: "tech"
    }
  ];

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setShowAnswer(false);
    setBotTyping(true);
    
    // Add question to conversation
    setConversationHistory(prev => [...prev, { type: 'question', content: question.question, id: question.id }]);
    
    // Simulate bot typing
    setTimeout(() => {
      setBotTyping(false);
      setShowAnswer(true);
      setConversationHistory(prev => [...prev, { type: 'answer', content: question.answer, id: question.id }]);
    }, 1500);
  };

  const clearConversation = () => {
    setConversationHistory([]);
    setSelectedQuestion(null);
    setShowAnswer(false);
    setBotTyping(false);
  };

  return (
    <section id="bot" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            🤖 AI POWERED ASSISTANT 🤖
          </h2>
          <p className="text-xl text-gray-300 font-semibold">
            💬 ASK ME ANYTHING - POWERED BY NEXT-GEN AI TECHNOLOGY 💬
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {questions.map((q) => (
              <button
                key={q.id}
                onClick={() => handleQuestionClick(q)}
                className={`bg-gradient-to-r ${q.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1 border-2 border-white/20 text-left group`}
              >
                <div className="text-4xl mb-3 group-hover:animate-bounce">{q.icon}</div>
                <div className="text-white font-bold text-lg">
                  {q.question}
                </div>
                <div className="text-gray-200 text-sm mt-2">
                  Click for instant AI response!
                </div>
                <div className="text-xs text-gray-300 mt-1 capitalize bg-black/30 px-2 py-1 rounded-full inline-block">
                  {q.category}
                </div>
              </button>
            ))}
          </div>

          {/* Conversation Display */}
          {conversationHistory.length > 0 && (
            <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-8 rounded-3xl shadow-2xl border-2 border-purple-500/50 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">💭 Conversation</h3>
                <button 
                  onClick={clearConversation}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full text-white font-bold text-sm transition-colors"
                >
                  🗑️ Clear Chat
                </button>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {conversationHistory.map((item, index) => (
                  <div key={index} className={`p-4 rounded-2xl ${item.type === 'question' ? 'bg-blue-600/50 ml-8' : 'bg-green-600/50 mr-8'}`}>
                    <div className="text-white font-semibold">
                      {item.type === 'question' ? '❓ You:' : '🤖 Bot:'}
                    </div>
                    <div className="text-gray-200 mt-1">{item.content}</div>
                  </div>
                ))}
                
                {botTyping && (
                  <div className="bg-green-600/50 mr-8 p-4 rounded-2xl">
                    <div className="text-white font-semibold">🤖 Bot:</div>
                    <div className="text-gray-200 mt-1 animate-pulse">
                      Thinking... 💭
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Current Answer Display */}
          {selectedQuestion && showAnswer && (
            <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-8 rounded-3xl shadow-2xl border-2 border-purple-500/50 text-center mb-6">
              <div className="text-5xl mb-4 animate-bounce">{selectedQuestion.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedQuestion.question}
              </h3>
              
              <div className="animate-fadeIn">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 px-8 py-4 rounded-full text-white font-black text-xl inline-block">
                  ✨ {selectedQuestion.answer} ✨
                </div>
              </div>
            </div>
          )}

          {!selectedQuestion && conversationHistory.length === 0 && (
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 rounded-full text-black font-black text-xl inline-block animate-bounce">
                👆 SELECT ANY QUESTION TO START CHATTING 👆
              </div>
            </div>
          )}

          {/* Bot Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-white font-bold">LIGHTNING FAST</div>
              <div className="text-gray-200 text-sm">Sub-second responses</div>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 rounded-2xl text-center">
              <div className="text-3xl mb-2">🧠</div>
              <div className="text-white font-bold">AI POWERED</div>
              <div className="text-gray-200 text-sm">Next-gen intelligence</div>
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-2xl text-center">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-white font-bold">ALWAYS ONLINE</div>
              <div className="text-gray-200 text-sm">24/7 availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotSection;