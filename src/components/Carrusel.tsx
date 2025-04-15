import { FaPrint } from "react-icons/fa6";
// import { LuPrinterCheck } from "react-icons/lu";
import { TfiFullscreen } from "react-icons/tfi";
import { BiGrid } from "react-icons/bi";
import { GiLaserburn, GiVerticalBanner } from "react-icons/gi";
import { FaFlag } from "react-icons/fa";
import { FaMattressPillow } from "react-icons/fa6";
import { Md4K } from "react-icons/md";

export default function Carrusel() {
  const icons = [
    { icon: <FaPrint className="text-black text-4xl" />, label: "Impresión" },
    // { icon: <LuPrinterCheck className="text-black text-4xl" />, label: "Revisión" },
    {
      icon: <GiVerticalBanner className="text-black text-4xl" />,
      label: "Banner",
    },
    { icon: <FaFlag className="text-black text-4xl" />, label: "Banderas" },
    {
      icon: <TfiFullscreen className="text-black text-4xl" />,
      label: "Gran escala",
    },
    {
      icon: <Md4K className="text-black text-4xl" />,
      label: "Alta Resolución",
    },
    { icon: <BiGrid className="text-black text-4xl" />, label: "Lonas" },
    {
      icon: <FaMattressPillow className="text-black text-4xl" />,
      label: "Tapetes",
    },
    {
      icon: <GiLaserburn className="text-black text-4xl" />,
      label: "Impresión Láser",
    },
    { icon: <FaPrint className="text-black text-4xl" />, label: "Impresión" },
    // { icon: <LuPrinterCheck className="text-black text-4xl" />, label: "Revisión" },
    {
      icon: <GiVerticalBanner className="text-black text-4xl" />,
      label: "Banner",
    },
    { icon: <FaFlag className="text-black text-4xl" />, label: "Banderas" },
    {
      icon: <TfiFullscreen className="text-black text-4xl" />,
      label: "Gran escala",
    },
    {
      icon: <Md4K className="text-black text-4xl" />,
      label: "Alta Resolución",
    },
    { icon: <BiGrid className="text-black text-4xl" />, label: "Lonas" },
    {
      icon: <FaMattressPillow className="text-black text-4xl" />,
      label: "Tapetes",
    },
    {
      icon: <GiLaserburn className="text-black text-4xl" />,
      label: "Impresión Láser",
    },
  ];

  return (
    <div className="overflow-x-auto scroll-smooth scrollbar-hide py-4 mt-5">
      <div
        className="flex items-center gap-3 lg:gap-20 px-3 animate-marquee touch-pan-x"
        onMouseEnter={(e) =>
          e.currentTarget.classList.remove("animate-marquee")
        }
        onMouseLeave={(e) => e.currentTarget.classList.add("animate-marquee")}
      >
        {[...icons, ...icons].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[100px] snap-start"
          >
            {item.icon}
            <span className="text-xs text-center mt-1">{item.label}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        @media (min-width: 1024px) {
          .animate-marquee {
            animation-duration: 25s;
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
