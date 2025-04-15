import ImageCard from "../components/ImageCard";
import MainTitle from "../components/MainTitle";
import ProcessCard from "../components/ProcessCard";
import { GoPencil } from "react-icons/go";
import { BsChatRightDotsFill } from "react-icons/bs";
import { BiSolidDollarCircle } from "react-icons/bi";
import { RxRocket } from "react-icons/rx";

function Servicios() {
  return (
    <>
      <MainTitle
        title="Nuestros"
        subtitle="Servicios"
        description="Descubre cómo nuestras soluciones pueden transformar tu estrategia promocional y maximizar tus resultados."
        showCarrusel={false}
        showButtons={false}
      />
      <div className="px-5 py-5 text-center bg-[#F9FAFB]">
        <h3 className="text-2xl font-bold mb-5">
          Soluciones completas de Marketing Promocional
        </h3>
        <p className="text-[#68707C] text-sm font-semibold px-4 my-7">
          Nuestras herramientas están diseñadas para cubrir cada aspecto de tus
          estrategias promocionales.
        </p>
        <section className="flex gap-x-3">
          <ImageCard imageUrl="/print-promotools.png" altText="imagen de impresora" text="Centro de Producción Gráfica"/>
          <ImageCard imageUrl="/design-promotools.png" altText="imagen de persona tecleando" text="Diseño y personalización visual"/>
          <ImageCard imageUrl="/logistic-promotools.png" altText="imagen de persona tecleando" text="Acabados y logística"/>
        </section>
      </div>
      <div className="px-5 py-5 text-center">
        <h3 className="text-2xl font-bold mb-5">Como Trabajamos</h3>
        <p className="text-[#68707C] text-sm font-semibold px-10">
          Un proceso sencillo y efectivo para transformar tus promociones
        </p>
        <section className="grid grid-rows-2 grid-cols-2 mt-2 py-8 gap-10 items-center justify-center">        
          <ProcessCard text="1.- Nos escribes" icon={<GoPencil />}/>
          <ProcessCard text="2.- Te asesoramos" icon={<BsChatRightDotsFill />}/>
          <ProcessCard text="3.- Cotizamos" icon={<BiSolidDollarCircle />}/>
          <ProcessCard text="4.- Iniciamos" icon={<RxRocket />}/>
        </section>
      </div>
    </>
  );
}

export default Servicios;
