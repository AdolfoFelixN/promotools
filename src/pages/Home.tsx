import Clientes from "../components/Clientes"
import MainContent from "../components/MainContent"
import MainTitle from "../components/MainTitle"


function Home() {
  return (
    <>
      <MainTitle title="Transforma tu marketing con" subtitle="PromoTools" description="Convertimos tu creatividad en impreiones de Alta Calidad" showCarrusel={true} showButtons={true}/>
      <MainContent/>
      <Clientes/>
    </>
  )
}

export default Home