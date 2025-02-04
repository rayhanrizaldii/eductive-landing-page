import feature from "@/assets/images/feature-1.svg";
import { Grid, Presentation, Users } from "lucide-react";

function Feature() {
  return (
    <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-evenly px-10 py-10 items-center w-full">
      <div className="hidden xl:block relative w-1/2 p-5">
        <img src={feature} alt="E-Learning SVG" className="w-full" />
      </div>
      <div className="flex flex-col items-center text-center w-1/3 gap-y-5 xl:text-left xl:items-start xl:w-1/3">
        <h1 className="font-bold text-2xl xl:text-4xl my-6">
          A user interface designed for the classroom
        </h1>
        <div className="flex text-muted-foreground text-lg gap-x-5 items-center">
          <div className="bg-blue-500 text-white p-3 rounded-full">
            <Grid size={36} />
          </div>
          Teachers don't get lost in the grid view and have a dedicated Podium
          space.
        </div>
        <div className="flex text-muted-foreground text-lg gap-x-5 items-center">
          <div className="bg-blue-500 text-white p-3 rounded-full">
            <Presentation size={36} />
          </div>
          TA's and presenters can be moved to the front of the class.
        </div>
        <div className="flex text-muted-foreground text-lg gap-x-5 items-center">
          <div className="bg-blue-500 text-white p-3 rounded-full">
            <Users size={36} />
          </div>
          Teachers can easily see all students and class data at one time.
        </div>
      </div>
    </div>
  );
}

export default Feature;
