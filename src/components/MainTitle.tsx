import Buttons from "./Buttons";
import Carrusel from "./Carrusel";

interface MainTitleProps {
  title: string;
  subtitle: string;
  description: string;
  showCarrusel?: boolean;
  showButtons: boolean;
}

export default function MainTitle({
  title,
  subtitle,
  description,
  showCarrusel = true,
  showButtons = true,
}: MainTitleProps) {
  return (
    <div className="px-5 py-5 text-center lg:py-10">
      <h2 className="text-3xl my-10 lg:text-4xl">
        {title} <span className="text-[#1F2C78CC]">{subtitle}</span>
      </h2>
      <p className="text-[#68707C] text-sm font-semibold px-10 lg:text-lg">
        {description}
      </p>
      {/* Botones para pantallas grandes */}
      {showButtons && <Buttons />}
      {showCarrusel && <Carrusel />}
    </div>
  );
}
