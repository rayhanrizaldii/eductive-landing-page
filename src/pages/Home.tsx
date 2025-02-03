import Card from "./components/Card";
import Hero from "./components/Hero";
import Support from "./components/Support";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <Support/>
      <Card />
    </div>
  );
}

export default Home;
