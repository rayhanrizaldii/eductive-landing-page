import Card from "./features/Card";
import Features from "./features/Features";
import Hero from "./features/Hero";
import Support from "./features/Support";

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
