import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ClientLogos from "@/components/ClientLogos";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Process />
        <ClientLogos />
        <FAQ />
        <Contact />
        </main>

      <Footer />
    </>
  );
}