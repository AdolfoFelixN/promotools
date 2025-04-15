import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white py-8 px-2">
      <h2 className="text-2xl text-center roboto">
        ¿Listo para transformar tus promociones?
      </h2>
      <div className="my-5 lg:flex lg:justify-between lg:items-center lg:px-10">
        <div>
          <div className="flex gap-3 items-center my-5">
            <h3 className="text-xl font-bold">Contáctanos</h3>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-2 items-center">
              <MdEmail fontSize={30} color="#5848E7" />
              <p className="font-semibold">
                Correo:{" "}
                <span className="font-normal">
                  contacto@estudiocreativopromotools.com
                </span>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaPhone fontSize={28} color="#5848E7" />
              <p className="font-semibold">
                Teléfono:{" "}
                <a
                  href="tel:8111008008"
                  className="font-normal text-blue-200 underline"
                >
                  8111008008
                </a>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <IoLocationSharp fontSize={28} color="#5848E7" />
              <p className="font-semibold">
                Dirección:{" "}
                <span className="font-normal">Centro, Monterrey, N.L.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-auto lg:h-48 lg:mx-5 lg:items-center lg:justify-center lg:rounded-lg lg:shadow-lg">
          <img src="/PromoToolsLogo2.png" alt="Logo" className="h-full w-full scale-125"/>
        </div>
      </div>
    </footer>
  );
}
