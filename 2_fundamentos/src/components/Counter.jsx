import { useState } from "react"

const Counter = () => {
// consultar valor , alterar valor 

const [count , setCount] = useState(0);
// variaveis não re-renderizam o componente
// let x = 10
// console.log|(x)
  return ( 
    <div>
        <p>Você clicou {count} vezes</p>
        <button onClick= {()=> setCount(count + 1)}>Aumentar</button>
    </div> 
  )   
};

export default Counter;