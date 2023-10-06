import Header from "./components/Header";
import Hero from "./components/Hero";
import Menue from "./components/Menue";
import Mission from "./components/Mission";
import Plan from "./components/Plan";
import Start from "./components/Start";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Work />
      <Menue />
      <Plan />
      <Testimonials />
      <Mission />
      <Start />
    </>
  );
}
