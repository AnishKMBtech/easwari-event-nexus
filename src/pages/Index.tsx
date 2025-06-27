
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
          <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
            Your Campus,<br />Your Stage.
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-6 tracking-wide">
            Manage. Discover. Participate.
          </p>
          <p className="text-lg mb-12 font-medium max-w-2xl mx-auto">
            All events, one place — SRM Easwari Engineering College
          </p>
          <Button className="bg-black text-white px-12 py-4 text-lg font-bold tracking-widest uppercase rounded-none hover:bg-gray-800 transition-all duration-300 w-full md:w-auto">
            Enter Platform
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-32 px-4 border-t-2 border-black transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20">
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider">One-Click Registration</h3>
              <p className="text-lg font-medium">Register for any event with a single click</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider">Student-Created</h3>
              <p className="text-lg font-medium">Events created and managed by students</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider">Centralized Hub</h3>
              <p className="text-lg font-medium">All campus events in one central location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Preview Section */}
      <section className={`py-32 px-4 border-t-2 border-black transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Discover Campus Events
          </h2>
          <p className="text-xl font-medium mb-12 max-w-2xl mx-auto">
            From tech talks to cultural festivals, find everything happening on campus
          </p>
          <Button className="bg-white text-black border-2 border-black px-12 py-4 text-lg font-bold tracking-widest uppercase rounded-none hover:bg-black hover:text-white transition-all duration-300 w-full md:w-auto">
            Browse Events
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-32 px-4 border-t-2 border-black transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl font-medium mb-12">
            Join thousands of students already using our platform
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <Button className="bg-black text-white px-12 py-4 text-lg font-bold tracking-widest uppercase rounded-none hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto">
              Sign Up Now
            </Button>
            <Button className="bg-white text-black border-2 border-black px-12 py-4 text-lg font-bold tracking-widest uppercase rounded-none hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-4 border-t-2 border-black transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-medium">
            Made for SRM Easwari Engineering College | Powered by Supabase
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
