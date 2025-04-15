import { ReactNode } from "react";

interface IconCardProps {
    title: string;
    icon?: ReactNode;
    }

function IconCard({title, icon}: IconCardProps) {
  return (
    <div className="flex flex-col gap-x-4 gap-y-1 items-center justify-center">
      <p className="roboto font-semibold">{title}</p>
      {icon}
    </div>
  );
}

export default IconCard;
