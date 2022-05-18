import { useState, createContext } from "react";

const CalculoContext = createContext();

const CalculoProvider = ({ children }) => {
  const [recividos, setRecividos] = useState(null);
  const [devueltos, setDevueltos] = useState(null);
  const [agrandayaDevueltos, setAgrandayaDevueltos] = useState(null);

  const [pagar, setPagar] = useState(0);
  const [pagarAgranda, setPagarAgranda] = useState(0);
  const [totalPagar, setTotalPagar] = useState(0);

  const [ganancia, setGanancia] = useState(0);
  const [gananciaAgranda, setGananciaAgranda] = useState(0);
  const [gananciaTotal, setGananciaTotal] = useState(0);

  const [modalFormulario, setModalFormulario] = useState(false);

  const handleModal = () => {
    setModalFormulario(!modalFormulario);
  };
  return (
    <CalculoContext.Provider
      value={{
        recividos,
        setRecividos,
        devueltos,
        setDevueltos,
        agrandayaDevueltos,
        setAgrandayaDevueltos,

        pagar,
        setPagar,
        pagarAgranda,
        setPagarAgranda,
        totalPagar,
        setTotalPagar,
        handleModal,
        modalFormulario,
        ganancia,
        setGanancia,
        gananciaAgranda,
        setGananciaAgranda,
        setGananciaTotal,
        gananciaTotal,
      }}
    >
      {children}
    </CalculoContext.Provider>
  );
};

export { CalculoProvider };

export default CalculoContext;
