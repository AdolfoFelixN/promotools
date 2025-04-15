import Card from "./Card";
import { FaPrint } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { TbPackageExport, TbPackages } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { MdFormatAlignCenter } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoFlash } from "react-icons/io5";

export default function MainContent() {
  return (
    <div className="px-5 py-5 lg:py-16 text-center bg-[#F9FAFB]">
        <h3 className="text-xl font-bold lg:text-3xl">Todo lo que necesitas para destacar</h3>
        <p className="text-[#68707C] text-sm lg:text-lg font-semibold px-4 my-7">PromoTools ofrece funcionalidades potentes y fáciles de usar para llevar tus promociones al siguiente nivel.</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-10">
            <Card icon={<FaPrint/>} title="Impresión Avanzada" definition="Asegura resultados nítidos y profesionales con tecnología de impresión de última generación."/>
            <Card icon={<RiEdit2Fill/>} title="Personalización Precisa" definition="Diseña e imprime materiales únicos adaptados a las necesidades específicas de tus clientes."/>
            <Card icon={<MdFormatAlignCenter/>} title="Servicios multiformato" definition="Ofrece soluciones en distintos formatos: desde tarjetas y flyers hasta gigantografías y vinilos."/>
            <Card icon={<TbPackages/>} title="Automatización de pedidos" definition="Optimiza el flujo de trabajo programando y gestionando pedidos de manera eficiente."/>
            <Card icon={<TbPackageExport/>} title="Entrega rápida y segura" definition="Cumple con tus plazos gracias a procesos eficientes y logística confiable."/>
            <Card icon={<BiSolidCategoryAlt/>} title="Catálogo de productos impresos" definition="Desde papelería corporativa hasta artículos promocionales personalizados."/>
            <Card icon={<MdSupportAgent/>} title="Soporte y atención" definition="Acompañamiento constante para resolver dudas y hacer seguimiento de pedidos."/>
            <Card icon={<IoFlash/>} title="Impresión bajo demanda" definition="Imprime solo lo necesario, cuando lo necesites. Ahorra espacio y costos."/>                        
        </div>
    </div>
  )
}
