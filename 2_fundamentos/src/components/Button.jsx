import React from 'react'

 const Button = () => {
    const handleClick = (num) => {
        console.log("Clicou!", num);
    }
    return (<button onClick={() => {handleClick (5)}}>Clique em Min</button>)
 }

 export default Button