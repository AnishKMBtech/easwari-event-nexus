
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className={`relative z-10 min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl p-12 shadow-2xl">
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Your Campus,<br />Your Stage.
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 font-medium mb-4">
              Manage. Discover. Participate.
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              All events, one place — SRM Easwari Engineering College
            </p>
            <Button className="bg-black text-white px-8 py-4 text-lg rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg">
              Enter Platform
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`relative z-10 py-20 px-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-md bg-white/15 border border-white/25 rounded-3xl p-12 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-16">
              Why Choose Our Platform?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">One-Click Registration</h3>
                  <p className="text-gray-800 font-medium">Register for any event with a single click</p>
                </div>
              </div>
              <div className="text-center">
                <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Student-Created</h3>
                  <p className="text-gray-800 font-medium">Events created and managed by students</p>
                </div>
              </div>
              <div className="text-center">
                <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Centralized Hub</h3>
                  <p className="text-gray-800 font-medium">All campus events in one central location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Preview Section */}
      <section className={`relative z-10 py-20 px-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/15 border border-white/25 rounded-3xl p-12 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              Discover Campus Events
            </h2>
            <p className="text-xl text-gray-800 font-medium mb-8 max-w-2xl mx-auto">
              From tech talks to cultural festivals, find everything happening on campus
            </p>
            <Button className="bg-white text-black px-8 py-4 text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg border-2 border-gray-200">
              Browse Events
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`relative z-10 py-20 px-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-800 font-medium mb-8">
              Join thousands of students already using our platform
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button className="bg-black text-white px-8 py-4 text-lg rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto">
                Sign Up Now
              </Button>
              <Button className="bg-white text-black px-8 py-4 text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg border-2 border-gray-200 w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 py-8 px-4 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6">
            <p className="text-gray-800 font-medium">
              Made for SRM Easwari Engineering College | Powered by Supabase
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
