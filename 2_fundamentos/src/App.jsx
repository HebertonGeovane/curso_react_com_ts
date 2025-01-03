import './App.css'
import BomDia from './components/BomDia'
import Welcome from './components/Welcome'
import Pai from './components/Pai';

function App() {
 
  return (
    <>
    {/* 6.1 - Criação de componente */}
    <Welcome />
    {/* 6.3 - Componente dentro de componente */}
    <BomDia />
    {/* 6.3 - Componente dentro de componente */}
    <Pai />
    </>
  )
}

export default App
