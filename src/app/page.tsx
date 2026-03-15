import Header from "../components/Header"; 
import Hero from "../components/Hero";
import About from "../components/About";
import Trust from "../components/Trust";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import Academy from "../components/Academy";
import Insights from "../components/Insights";
import Publications from "../components/Publications";
import Leadership from "../components/Leadership";
import Team from "../components/Team";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Trust />
        <Services />
        <FAQ />
        <Academy />
        <Insights />
        <Publications />
        <Leadership />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
