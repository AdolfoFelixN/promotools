import { useEffect, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const opiniones = [
  "Nunca había sido tan sencillo crear campañas promocionales efectivas. Con PromoTools hemos conseguido superar con creces nuestras expectativas.",
  "PromoTools revolucionó nuestra forma de hacer marketing. Ahora llegamos a más clientes con menos esfuerzo.",
  "La atención es muy amable y el soporte al cliente es excelente. Muy recomendado.",
  "Con PromoTools nuestros eventos tienen mejor alcance y profesionalismo. ¡Nos encanta!",
  "Los resultados que hemos obtenido desde que utilizamos PromoTools para publicidad son sorprendentes. Es nuestra opción favorita."
];

export default function Clientes() {
  const [users, setUsers] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % opiniones.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [users]);

  const handlePrev = () => {
    fadeOutAndChange(() => {
      setIndex((prev) => (prev - 1 + opiniones.length) % opiniones.length);
    });
  };

  const handleNext = () => {
    fadeOutAndChange(() => {
      setIndex((prev) => (prev + 1) % opiniones.length);
    });
  };

  const fadeOutAndChange = (callback: () => void) => {
    setFade(false);
    setTimeout(() => {
      callback();
      setFade(true);
    }, 400);
  };

  const user = users[index];

  return (
    <div className="px-5 py-5 lg:py-10 flex flex-col items-center">
      <h3 className="text-xl text-center font-bold lg:text-3xl">Lo que dicen nuestros clientes</h3>
      <p className="text-[#68707C] text-sm lg:text-lg text-center font-semibold px-2 my-4">
        Empresas de todos los tamaños confían en PromoTools para impulsar sus estrategias promocionales.
      </p>

      {/*Vista para pantallas pequeñas (slider con flechas) */}
      <div className="relative w-full max-w-xl lg:hidden">
        <div
          className="px-5 py-5 border rounded-md flex flex-col gap-5 border-gray-400 transition-opacity duration-600 ease-in-out"
          style={{ opacity: fade ? 1 : 0 }}
        >
          <div className="flex text-yellow-400">
            {Array(5).fill(0).map((_, i) => (
              <FaStar key={i} fontSize={20} />
            ))}
          </div>

          {user && (
            <div>
              <div className="flex gap-3 items-center">
                <img src={user.picture.medium} alt="avatar" className="rounded-full w-16 h-16" />
                <div>
                  <p className="text-lg font-semibold">
                    {user.name.first} {user.name.last}
                  </p>
                  <span className="text-[#68707C] text-sm">
                    {user.location.city}, {user.location.country}
                  </span>
                </div>
              </div>
              <p className="mt-3">{opiniones[index]}</p>
            </div>
          )}
        </div>

        {/* Flechas solo visibles en móvil */}
        <button
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white border p-2 rounded-full shadow-md"
          onClick={handlePrev}
        >
          <FaChevronLeft fontSize={10} />
        </button>
        <button
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white border p-2 rounded-full shadow-md"
          onClick={handleNext}
        >
          <FaChevronRight fontSize={10} />
        </button>
      </div>

      {/*Vista para pantallas grandes (mostrar 3 cartas estáticas sin flechas) */}
      <div className="hidden lg:grid grid-cols-3 gap-14 w-full max-w-6xl my-18 lg:mt-18 lg:mb-5">
        {opiniones.slice(0, 3).map((opinion, i) => {
          const userInfo = users[i];
          return (
            <div key={i} className="border rounded-md px-5 py-5 flex flex-col gap-5 border-gray-400">
              <div className="flex text-yellow-400">
                {Array(5).fill(0).map((_, j) => (
                  <FaStar key={j} fontSize={20} />
                ))}
              </div>
              {userInfo && (
                <div>
                  <div className="flex gap-3 items-center">
                    <img src={userInfo.picture.medium} alt="avatar" className="rounded-full w-16 h-16" />
                    <div>
                      <p className="text-lg font-semibold">
                        {userInfo.name.first} {userInfo.name.last}
                      </p>
                      <span className="text-[#68707C] text-sm">
                        {userInfo.location.city}, {userInfo.location.country}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3">{opinion}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
