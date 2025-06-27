
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
      <section className={`min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight uppercase">
            Your Campus,<br />Your Stage.
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-6 tracking-wide uppercase">
            Manage. Discover. Participate.
          </p>
          <p className="text-lg mb-4 font-medium max-w-2xl mx-auto uppercase tracking-wider">
            All Events, One Place
          </p>
          <p className="text-lg mb-12 font-medium max-w-2xl mx-auto">
            SRM Easwari Engineering College
          </p>
          <Button className="bg-black text-white px-12 py-4 text-lg font-bold tracking-widest uppercase rounded-none hover:bg-gray-800 transition-all duration-300 w-full md:w-auto">
            Enter Platform
          </Button>
        </div>
      </section>

      {/* What is Vibe-Check Section */}
      <section className={`py-32 px-4 border-t-2 border-black transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-wide">
            What is<br />Vibe-Check?
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-wider">
            The Ultimate Events Platform for SRM Easwari Students.
          </p>
          <p className="text-lg font-medium max-w-4xl mx-auto leading-relaxed">
            Discover cultural festivals. Join technical workshops. Connect with your campus community. All in one digital hub.
          </p>
        </div>
      </section>

      {/* Why Vibe-Check Section */}
      <section className={`py-32 px-4 border-t-2 border-black transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-20 uppercase tracking-wide">
            Why Vibe-Check?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="text-center">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider">Centralized</h3>
              <p className="text-lg font-medium">All events from cultural to technical in one place</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider">One-Click</h3>
              <p className="text-lg font-medium">Register for any event with a single click</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider">Real-Time</h3>
              <p className="text-lg font-medium">Get instant notifications about event changes</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider">Discovery</h3>
              <p className="text-lg font-medium">Find new events tailored to your interests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Developer Section */}
      <section className={`py-32 px-4 border-t-2 border-black transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-wide">
            Meet the<br />Developer
          </h2>
          <div className="mb-8">
            <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-black">VB</span>
            </div>
            <h3 className="text-2xl font-black mb-2 uppercase tracking-wider">Vibe-Check Team</h3>
            <p className="text-lg font-bold mb-6 uppercase tracking-wide">Full-Stack Developer</p>
            <p className="text-lg font-medium mb-8 max-w-2xl mx-auto">
              Passionate about creating digital solutions that bring campus communities together.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
              <Button className="bg-white text-black border-2 border-black px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-none hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto">
                GitHub
              </Button>
              <Button className="bg-white text-black border-2 border-black px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-none hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto">
                LinkedIn
              </Button>
              <Button className="bg-white text-black border-2 border-black px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-none hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-4 border-t-2 border-black transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-wide">
            Vibe-Check
          </h2>
          <p className="text-lg font-medium mb-4">
            Made for SRM Easwari Engineering College, Chennai
          </p>
          <p className="text-lg font-medium mb-6">
            Powered by Supabase
          </p>
          <p className="text-sm font-bold uppercase tracking-widest">
            © 2024 Vibe-Check • Stay Tuned for More Updates
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
