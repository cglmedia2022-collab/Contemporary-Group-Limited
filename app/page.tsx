import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* About Company Section */}
      <About />
      
      {/* Services Section */}
      <Services />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Featured Blog Section */}
      <Blog />
      
      {/* Footer Section */}
      <Footer />
    </main>
  );
}
