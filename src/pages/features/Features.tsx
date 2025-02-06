import { Grid, Presentation, Users } from "lucide-react";
import Feature from "./Feature";
import feature1 from "@/assets/images/feature-1.svg";
import feature2 from "@/assets/images/feature-2.svg";
import feature3 from "@/assets/images/feature-3.svg";

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
      <Feature
        image={feature1}
        title="A user interface designed for the classroom"
        features={[
          {
            icon: Grid,
            text: "Teachers don't get lost in the grid view and have a dedicated Podium space.",
          },
          {
            icon: Presentation,
            text: "TA's and presenters can be moved to the front of the class.",
          },
          {
            icon: Users,
            text: "Teachers can easily see all students and class data at one time.",
          },
        ]}
      />
      <Feature
        image={feature2}
        imagePosition="right"
        title="Tools For Teachers And Learners"
        features={[
          {
            text: "Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.",
          },
        ]}
      />
      <Feature
        image={feature3}
        title="Assessments, Quizzes, Tests"
        features={[
          {
            text: "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.",
          },
        ]}
      />
    </>
  );
}

export default Features;
