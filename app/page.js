import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PopularDestinations from "./components/PopularDestinations";
import BookingSection from "./components/BookingSection";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main className="home w-full relative">
      <HeroSection />
      <AboutSection />
      <PopularDestinations />
      <BookingSection />
      <Gallery />
    </main>
  );
}
