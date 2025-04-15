import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdScatterPlot } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
function Buttons() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#footer") {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="hidden lg:flex gap-10 justify-center my-7 text-white text-md">
      <Link
        to="#footer"
        className="flex items-center gap-2 bg-blue-500 px-2 py-2 rounded cursor-pointer hover:bg-blue-600"
      >
        Contactanos <FaArrowRightLong />
      </Link>
      <Link
        to="/servicios"
        className="flex items-center gap-2 border border-gray-200 text-black px-6 py-2 rounded cursor-pointer hover:bg-gray-200 hover:border-gray-300"
      >
        Servicios <MdScatterPlot />
      </Link>
    </div>
  );
}

export default Buttons;
