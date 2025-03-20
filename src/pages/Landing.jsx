import React, { useState } from 'react';
import { MessageSquare, Users, Shield, Globe2, Bell, X, ArrowRight } from 'lucide-react';

const LandingPage = ({ onGetStarted }) => {
  const [showNote, setShowNote] = useState(false);

  const scrollToAbout = (e) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Fixed Controls */}
      <div className="fixed right-6 top-24 flex flex-col gap-4 z-50">
        <button 
          onClick={() => setShowNote(true)}
          className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors shadow-lg group relative animate-vibrate"
        >
          <Bell className="h-6 w-6" />
          <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Show Instructions
          </span>
        </button>
      </div>

      {/* Instructions Popup */}
      {showNote && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full relative">
            <button 
              onClick={() => setShowNote(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Instructions & Notes</h3>
            <div className="space-y-4 text-gray-300">
              <p>👋 Welcome to ConnectMatch! Here's how to get started:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Right now, there might be no one with the same interest because I just launched this platform. For testing, open it in two different browsers and select the same interest</li>
                <li>Click "Get Started" to create your account</li>
                <li>Fill in your interests and preferences</li>
                <li>Browse matches based on shared interests</li>
                <li>Start meaningful conversations!</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* Rest of the content */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">ConnectMatch</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Connect with People Who Share Your Interests
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Join meaningful conversations with like-minded individuals who share your passions..
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button 
              onClick={onGetStarted}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button onClick={scrollToAbout} className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-400/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-800/50">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
      Why Choose ConnectMatch?
    </h2>
    <div className="grid md:grid-cols-3 gap-12">
      <FeatureCard
        icon={<Users className="h-8 w-8 text-blue-400" />}
        title="Connect with Like-Minded People"
        description="Our smart algorithm automatically places you in personalized chat rooms with users who share your specific interests and passions, whether it’s coding, gaming, business, or any other field."
      />
      <FeatureCard
        icon={<Shield className="h-8 w-8 text-blue-400" />}
        title="Focused Discussions"
        description="Engage in meaningful conversations without distractions. Our advanced security measures ensure your discussions remain private, protected, and free from irrelevant messages or spam."
      />
      <FeatureCard
        icon={<Globe2 className="h-8 w-8 text-blue-400" />}
        title="Expand Your Network"
        description="Build meaningful connections with like-minded individuals from around the world. Join a global community that breaks geographical barriers and fosters genuine relationships in your field of interest."
      />
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 mb-6">
            Our mission is to bring people together who share the same interests. We want to create a space where everyone can chat, learn, and connect with like-minded people easily.
            </p>
            <p className="text-lg text-gray-300">
              Whether you're passionate about photography, love discussing books, or want to connect with fellow tech enthusiasts, ConnectMatch helps you find your tribe.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <MessageSquare className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">ConnectMatch</span>
              </div>
              <p className="text-gray-400">
                Connecting people through shared interests and meaningful conversations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://x.com/amitkumar71845" className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/amitkumar2775/" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/amitsingh2775" className="text-gray-400 hover:text-blue-400 transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 ConnectMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Add CSS for vibration animation */}
      <style jsx>{`
        @keyframes vibrate {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-vibrate {
          animation: vibrate 0.5s infinite;
        }
      `}</style>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-gray-800/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-blue-400 mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default LandingPage;