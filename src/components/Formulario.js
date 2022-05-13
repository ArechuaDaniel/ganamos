import { useState, useEffect } from "react";
import Modal from "./Modal";
import useCalculo from "../hooks/useCalculo";

const Formulario = () => {
  const [modal, setModal] = useState(false);

  const {
    handleModal,
    recividos,
    setRecividos,
    devueltos,
    setDevueltos,
    agrandayaDevueltos,
    setAgrandayaDevueltos,
    setPagar,
    setPagarAgranda,
    setGanancia,
    setGananciaAgranda,
  } = useCalculo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recividos - devueltos >= 60) {
      setPagar((recividos - devueltos) * 0.65);
      setPagarAgranda((recividos - devueltos - agrandayaDevueltos) * 0.37);
      

      setGanancia((recividos - devueltos) * 0.35);
      setGananciaAgranda((recividos - devueltos - agrandayaDevueltos) * 0.13);
    }
    if (recividos - devueltos < 60) {
      setPagar((recividos - devueltos) * 0.70);
      setPagarAgranda((recividos - devueltos - agrandayaDevueltos) * 0.37);
      
      setGanancia((recividos - devueltos) * 0.30);
      setGananciaAgranda((recividos - devueltos - agrandayaDevueltos) * 0.13);
    }
    
    
  };

  const resetear = () => {
    setRecividos("");
    setDevueltos("");
    setAgrandayaDevueltos("");
  };
  return (
    <>
      <div className="mt-10 sm:mt-5 p-5">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Valores a Pagar
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Usar con responsabilidad derechos reservados para Daniel
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit} action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="recividos"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Boletos Recividos
                      </label>
                      <input
                        type="number"
                        name="boletosRecividos"
                        id="boletosRecividos"
                        onChange={(e) => setRecividos(e.target.value)}
                        value={recividos}
                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border bg-gray-50 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="devueltos"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Boletos Devueltos
                      </label>
                      <input
                        type="number"
                        name="boletosDevueltos"
                        id="boletosDevueltos"
                        onChange={(e) => setDevueltos(e.target.value)}
                        value={devueltos}
                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="agrandaya-devueltos"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Agranda Ya Devueltos
                      </label>
                      <input
                        type="number"
                        name="agrandayaDevueltos"
                        id="agrandayaDevueltos"
                        onChange={(e) => setAgrandayaDevueltos(e.target.value)}
                        value={agrandayaDevueltos}
                        className="mt-1 p-2  block w-full shadow-sm sm:text-sm border rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    onClick={() => resetear()}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Resetear
                  </button>
                  <button
                    type="submit"
                    onClick={handleModal}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Calcular
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal modal={modal} setModal={setModal} />
    </>
  );
};

export default Formulario;
