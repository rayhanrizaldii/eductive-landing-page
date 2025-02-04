import Card from "./components/Card";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Support from "./components/Support";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <Support/>
      <Card />
      <Features/>
    </div>
  );
}

export default Home;
