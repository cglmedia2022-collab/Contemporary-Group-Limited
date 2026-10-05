import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import MediaHighlight from "@/components/MediaHighlight";
import GlobalCompact from "@/components/GlobalCompact";
import CTA from "@/components/CTA";
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
      <GlobalCompact />
      <Projects />
      
      {/* Clients Section */}
      <Clients />
      
      {/* Testimonials Section */}
      {/* <Testimonials /> */}
      
      {/* Featured Blog Section */}
      <Blog />
      
      {/* Media Highlight Section */}
      <MediaHighlight />
      
      {/* CTA Section */}
      <CTA />
      
      {/* Footer Section */}
      <Footer />
    </main>
  );
}
