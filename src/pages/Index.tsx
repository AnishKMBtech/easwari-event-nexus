
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import TypewriterText from "@/components/TypewriterText";
import { Calendar, Moon } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-black font-sans relative overflow-x-hidden">
      {/* Radial gradient overlays for Cluely-style background */}
      <div className="fixed inset-0 bg-gradient-radial from-blue-200/30 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-none">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-black">Vibe-Check</span>
              </div>
              <div className="flex items-center space-x-8">
                <a href="#" className="text-black font-medium hover:text-blue-600 transition-colors">Home</a>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-black hover:bg-white/20 rounded-full"
                >
                  <Moon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`min-h-screen flex items-center justify-center px-4 pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 max-w-5xl mx-auto text-center shadow-xl">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight uppercase text-black">
            <TypewriterText 
              text="Your Campus, Your Stage." 
              speed={80}
              className="block"
            />
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-6 tracking-wide uppercase text-black">
            Manage. Discover. Participate.
          </p>
          <p className="text-lg mb-4 font-medium max-w-2xl mx-auto uppercase tracking-wider text-black/80">
            All Events, One Place
          </p>
          <p className="text-lg mb-12 font-medium max-w-2xl mx-auto text-black/80">
            SRM Easwari Engineering College
          </p>
          <Button className="bg-black text-white px-12 py-4 text-lg font-bold tracking-widest uppercase rounded-2xl hover:bg-gray-800 transition-all duration-300 w-full md:w-auto shadow-lg hover:shadow-xl">
            Enter Platform
          </Button>
        </div>
      </section>

      {/* What is Vibe-Check Section */}
      <section className={`py-20 px-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 max-w-6xl mx-auto text-center shadow-xl">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-wide text-black">
            What is<br />Vibe-Check?
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-wider text-black">
            The Ultimate Events Platform for SRM Easwari Students.
          </p>
          <p className="text-lg font-medium max-w-4xl mx-auto leading-relaxed text-black/80">
            Discover cultural festivals. Join technical workshops. Connect with your campus community. All in one digital hub.
          </p>
        </div>
      </section>

      {/* Why Vibe-Check Section */}
      <section className={`py-20 px-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 max-w-6xl mx-auto shadow-xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-20 uppercase tracking-wide text-black">
            Why Vibe-Check?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-black">Centralized</h3>
              <p className="text-lg font-medium text-black/80">All events from cultural to technical in one place</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-black">One-Click</h3>
              <p className="text-lg font-medium text-black/80">Register for any event with a single click</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-black">Real-Time</h3>
              <p className="text-lg font-medium text-black/80">Get instant notifications about event changes</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-black">Discovery</h3>
              <p className="text-lg font-medium text-black/80">Find new events tailored to your interests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Developer Section */}
      <section className={`py-20 px-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto text-center shadow-xl">
          <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-wide text-black">
            Meet the<br />Developer
          </h2>
          <div className="mb-8">
            <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl font-black">VB</span>
            </div>
            <h3 className="text-2xl font-black mb-2 uppercase tracking-wider text-black">Vibe-Check Team</h3>
            <p className="text-lg font-bold mb-6 uppercase tracking-wide text-black">Full-Stack Developer</p>
            <p className="text-lg font-medium mb-8 max-w-2xl mx-auto text-black/80">
              Passionate about creating digital solutions that bring campus communities together.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
              <Button className="bg-white/20 backdrop-blur-sm text-black border border-white/30 px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-2xl hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto shadow-lg">
                GitHub
              </Button>
              <Button className="bg-white/20 backdrop-blur-sm text-black border border-white/30 px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-2xl hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto shadow-lg">
                LinkedIn
              </Button>
              <Button className="bg-white/20 backdrop-blur-sm text-black border border-white/30 px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-2xl hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto shadow-lg">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-4 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-wide text-black">
            Vibe-Check
          </h2>
          <p className="text-lg font-medium mb-4 text-black/80">
            Made for SRM Easwari Engineering College, Chennai
          </p>
          <p className="text-lg font-medium mb-6 text-black/80">
            Powered by Supabase
          </p>
          <p className="text-sm font-bold uppercase tracking-widest text-black/60">
            © 2024 Vibe-Check • Stay Tuned for More Updates
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
