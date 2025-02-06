import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookUp2Icon, Laptop, Users } from "lucide-react";

function CardSection() {
  const cardItem = [
    {
      logo: <BookUp2Icon size={48} />,
      desc: "Unlimited Learning Opportunities",
      content:
        "Eductiv offers hundreds of high-quality courses designed to help you achieve your educational and career goals.",
    },
    {
      logo: <Laptop size={48} />,
      desc: "Easy and Flexible Access",
      content:
        "Enjoy the convenience of learning anywhere, anytime, on any device. ",
    },
    {
      logo: <Users size={48} />,
      desc: "Learn With Expert Instructors",
      content:
        "Each course is designed by industry experts with a practical and applicable approach.",
    },
  ];

  return (
    <>
      <div className="flex w-full items-center justify-between gap-x-4 h-[100px] my-6">
        <div className="h-[2px] w-full border-t-4 mx-6" />
        <h1 className="flex-1 text-nowrap font-bold text-4xl xl:text-6xl max-w-3xl mx-6">
          Why Eductiv?
        </h1>
        <div className="h-[2px] w-full border-t-4 mx-6" />
      </div>
      <div className="flex flex-wrap w-full items-center justify-evenly gap-4">
        {cardItem.map((item, index) => (
          <Card
            className="w-[350px] h-[300px] flex flex-col shadow-xl"
            key={index}
          >
            <CardHeader>
              <CardTitle className="flex">
                <div className="bg-indigo-400/80 p-2 rounded-full">
                  <div className="bg-indigo-600 text-white p-4 rounded-full">
                    {item.logo}
                  </div>
                </div>
              </CardTitle>
              <CardDescription>
                <h1 className="text-xl xl:text-2xl text-black font-bold">
                  {item.desc}
                </h1>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-medium">
                {item.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default CardSection;
