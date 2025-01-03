import {useState} from 'react'

export const UserInfoForm = () => {
    const [name , setName] = useState("")
    const [email ,setEmail] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        // acessra API via fetch ou axios 
        console.log(name, email)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} 
        onChange={(e)=> setName(e.target.value)}  
        placeholder='Digite o seu Nome'
        />
         <input type="email" value={email} 
        onChange={(e)=> setEmail(e.target.value)}  
        placeholder='Digite o seu e-mail'
        />
        
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default UserInfoForm