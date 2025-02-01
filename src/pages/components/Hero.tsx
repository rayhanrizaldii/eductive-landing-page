import banner from "@/assets/images/banner.png";
import { Button } from "@/components/ui/button";
import { Play, Users } from "lucide-react";

function Hero() {
  return (
    <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between px-10 py-10 items-center w-full bg-violet-100">
      <div className="flex flex-col items-center xl:items-start text-center xl:text-left w-full xl:w-1/2">
        <h1 className="border border-indigo-600 rounded-xl px-7 py-2 mt-10 text-xl">
          Hi, Learner!
        </h1>
        <h1 className="font-bold text-4xl xl:text-6xl max-w-xl my-6">
          Transform Your Learning, Shape Your Future!
        </h1>
        <p className="text-slate-500 text-lg xl:text-xl max-w-xl">
          The Trusted E-Learning Platform to Enhance Your Skills and Knowledge.
          Learn Anytime, Anywhere.
        </p>

        <div className="flex flex-col xl:flex-row gap-5 mt-10">
          <Button size={"xl"}>Learn Now</Button>
          <Button size={"xl"} variant={"outline"}>
            Play Video
            <div className="ml-1 bg-indigo-600 text-white p-2 rounded-full">
              <Play />
            </div>
          </Button>
        </div>
      </div>
      <div className="hidden xl:block relative w-1/2 p-5">
        <img src={banner} alt="E-Learning SVG" className="w-[85%]" />
        <div className="absolute bottom-[7rem] right-10 bg-white shadow-lg rounded-3xl flex items-center px-8 py-5 gap-2">
          <div className="bg-blue-500 text-white p-5 mr-2 rounded-full">
            <Users size={48} />
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">100+</p>
            <p className="text-lg text-gray-600">Enrolled Student</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
