import './App.css'
import BomDia from './components/BomDia'
import Welcome from './components/Welcome'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
function App() {
 
  return (
    <>
    {/* 6.1 - Criação de componente */}
    <Welcome />
    {/* 6.2 - Expressões no JSX */}
    <BomDia />
    {/* 6.3 - Componente dentro de componente */}
    <Pai />
    {/* 6.4 Props */}
    <Descricao nome = "Heberton" idade={39} />
    {/* 6.5 Desestruturação de props */}
    <Cachorro nome = "Spike" raca= "Caramelo" />
    </>
  )
}

export default App
