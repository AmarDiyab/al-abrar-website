import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PopularDestinations from "./components/PopularDestinations";
import BookingSection from "./components/BookingSection";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="home w-[100svw] relative overflow-hidden">
      <HeroSection />
      <AboutSection />
      <PopularDestinations />
      <BookingSection />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
