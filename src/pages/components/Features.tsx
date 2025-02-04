import Feature from "./Feature";

function Features() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20 gap-y-10">
        <h1 className="font-bold flex text-4xl xl:text-6xl">
          Our &nbsp; <span className="text-indigo-600">Features</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>
      <Feature />
    </>
  );
}

export default Features;
