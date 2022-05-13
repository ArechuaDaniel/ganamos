import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import useCalculo from "../hooks/useCalculo";

export default function Modal() {
  // const [open, setOpen] = useState(true);
  const {
    modalFormulario,
    handleModal,
    pagar,
    pagarAgranda,
    totalPagar,
    ganancia,
    gananciaAgranda,
    gananciaTotal,
    setTotalPagar,
    setGananciaTotal
   
  } = useCalculo();
  setTotalPagar(pagar + pagarAgranda);
  setGananciaTotal(ganancia + gananciaAgranda);
 

  return (
    <Transition.Root show={modalFormulario} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Valor a Pagar
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Valores a pagar Normales:
                          <span className="font-bold"> {parseFloat(pagar).toFixed(2)} </span>
                        </p>
                        <p className="text-sm text-gray-500">
                          Valores a pagar por Agranda Ya: <span className="font-bold">{parseFloat(pagarAgranda).toFixed(2)} </span>
                        </p>
                        <p className="text-sm text-gray-500 pb-5">
                          Total a Pagar: <span className="font-bold text-xl">{parseFloat(totalPagar).toFixed(2)}</span> 
                        </p>
                        <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Valor a Ganar
                      </Dialog.Title>
                        <p className="text-sm text-gray-500">
                          Ganancia Normal:<span className="font-bold">{parseFloat(ganancia).toFixed(2)}</span> 
                        </p>
                        <p className="text-sm text-gray-500">
                          Ganancia por Agranda Ya: <span className="font-bold">
                          {parseFloat(gananciaAgranda).toFixed(2)}</span> 
                        </p>
                        <p className="text-sm text-gray-500">
                          Ganancia Total: <span className="font-bold text-xl">
                          {parseFloat(gananciaTotal).toFixed(2)}</span> 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleModal}
                  >
                    Regresar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
