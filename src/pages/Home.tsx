import Card from "./components/Card";
import Hero from "./components/Hero";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <Card />
    </div>
  );
}

export default Home;
