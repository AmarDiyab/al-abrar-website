import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PopularDestinations from "./components/PopularDestinations";

export default function Home() {
  return (
    <main className="home w-full relative">
      <HeroSection />
      <AboutSection />
      <PopularDestinations />
    </main>
  );
}
