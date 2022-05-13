import Formulario from "./components/Formulario";
import {CalculoProvider} from './context/CalculoProvider'
function App() {
  

  return (
    <>
      <CalculoProvider>
        <Formulario />
      </CalculoProvider>
    </>
  )
}

export default App;
