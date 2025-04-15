import { ReactNode } from "react";
interface CardProps {
  title: string;
  definition: string;
  icon: ReactNode;
}

export default function Card({ icon, title, definition }: CardProps) {
  return (
    <div className="border px-2 py-2 lg:p-4 rounded-sm text-left flex flex-col gap-2 lg:gap-4 border-[#5848E7] transition-transform duration-300 ease-in-out lg:hover:scale-105">
      <div className="w-9 h-9 bg-blue-500 rounded-sm flex items-center justify-center text-white text-xl">
        {icon}
      </div>
      <p className="text-[#5848E7] font-semibold lg:text-lg">{title}</p>
      <p className="text-[#68707C] text-xs lg:text-sm">{definition}</p>
    </div>
  );
}
