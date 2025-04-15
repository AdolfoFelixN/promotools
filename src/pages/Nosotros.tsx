import IconCard from "../components/IconCard";
import MainTitle from "../components/MainTitle";
import ServiceCard from "../components/ServiceCard";
import { FaUserFriends } from "react-icons/fa";
import { LuArrowsUpFromLine } from "react-icons/lu";
import { PiPlantThin } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { RiEyeFill } from "react-icons/ri";

function Nosotros() {
  return (
    <>
      <MainTitle
        title="Conoce sobre"
        subtitle="PromoTools"
        description="Somos un equipo apasionado por crear soluciones innovadoras que transforman la manera en que las empresas gestionan sus promociones."
        showCarrusel={false}
        showButtons={false}
      />
      <div className="px-5 py-5 text-center bg-[#F9FAFB]">
        <h3 className="text-2xl font-bold mb-5">Sobre Nosotros</h3>
        {/* <p className="text-[#68707C] text-sm font-semibold px-4 my-7">PromoTools ofrece funcionalidades potentes y fáciles de usar para llevar tus promociones al siguiente nivel.</p> */}
        <section className="flex flex-col gap-x-4 gap-y-5">
          <ServiceCard
            title="Nuestra misión"
            icon={<TbTargetArrow />}
            description="Empoderar a empresas de todos los tamaños con herramientas de marketing
        promocional avanzadas pero accesibles, que les permitan competir de
        manera efectiva en el mercado digital actual."
          />
          <ServiceCard
            title="Nuestra visión"
            icon={<RiEyeFill />}
            description="Ser la empresa líder en soluciones de marketing promocional, reconocida por su innovación, fiabilidad y el impacto positivo que genera en los resultados de nuestros clientes."
          />
        </section>
      </div>
      <div className="px-5 py-5 text-center">
        <h3 className="text-2xl font-bold mb-5">Nuestros valores</h3>
        <p className="text-[#68707C] text-sm font-semibold px-10">
          Estos principios fundamentales guian cada decisión que tomamos y cada
          solucion que desarrollamos.
        </p>
        <section className="flex flex-col py-8 gap-10 items-center justify-center">
          <IconCard
            title="Pasión por el cliente"
            icon={<FaUserFriends fontSize={88} />}
          />
          <IconCard
            title="Excelencia e Innovación"
            icon={<LuArrowsUpFromLine fontSize={88} />}
          />
          <IconCard
            title="Crecimiento compartido"
            icon={<PiPlantThin fontSize={88} />}
          />
        </section>
      </div>
    </>
  );
}

export default Nosotros;
