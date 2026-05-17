import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <Hero />
      
      {/* 
        Other homepage sections (e.g., Services, Projects) will go here.
      */}
      
      {/* Footer Section */}
      <Footer />
    </main>
  );
}
