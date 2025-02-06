import { LucideIcon } from "lucide-react";

interface FeatureProps {
  image: string;
  imagePosition?: "left" | "right";
  title: string;
  features: {
    icon?: LucideIcon;
    text: string;
  }[];
}

const Feature: React.FC<FeatureProps> = ({
  image,
  imagePosition = "left",
  title,
  features,
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-evenly px-10 py-10 items-center w-full">
      {isImageLeft && (
        <div className="hidden xl:block relative w-1/2 p-5">
          <img
            src={image}
            alt={image}
            className="w-full max-w-lg h-auto mx-auto"
          />
        </div>
      )}
      <div className="flex flex-col items-center text-center w-1/3 gap-y-5 xl:text-left xl:items-start xl:w-1/3">
        <h1 className="font-bold text-2xl xl:text-4xl my-6">{title}</h1>
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex text-muted-foreground text-lg gap-x-5 items-center"
          >
            {feature.icon && (
              <div className="bg-blue-500 text-white p-3 rounded-full">
                <feature.icon size={36} />
              </div>
            )}
            {feature.text}
          </div>
        ))}
      </div>
      {!isImageLeft && (
        <div className="hidden xl:block relative w-1/2 p-5">
          <img
            src={image}
            alt="Feature Image"
            className="w-full max-w-lg h-auto mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default Feature;
