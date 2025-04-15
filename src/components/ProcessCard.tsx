import { ReactNode } from "react";

interface ProcessCardProps {
    text: string;
    icon: ReactNode;
}

function ProcessCard({text, icon}: ProcessCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="font-semibold">{text}</p>
      <div className="bg-black w-36 h-36 rounded-full flex items-center justify-center text-white text-7xl">
        {icon}
      </div>
    </div>
  );
}

export default ProcessCard;
