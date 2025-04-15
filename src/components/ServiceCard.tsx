import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

function ServiceCard({title, description, icon}: ServiceCardProps) {
  return (
    <div className="border p-4 rounded-sm text-left flex flex-col gap-2 border-[#5848E7]">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-blue-500 rounded-sm flex items-center justify-center text-white text-xl">
          {icon}
        </div>
        <p className="text-lg font-bold">{title}</p>
      </div>
      <p className="text-xs text-[#68707C]">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
