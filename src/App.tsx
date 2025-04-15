import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
