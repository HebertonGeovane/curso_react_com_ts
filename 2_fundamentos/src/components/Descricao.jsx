const Descricao = (props) => {
    // props{}
    // propriedades -> chaves de  valores
    // props.nome =  "Hebrton"
  return (
    <div> 
        <p>   Seu nome é : {props.nome} </p>
        <p>   e vc tem  {props.idade} anos de idade </p>
    </div>
  )
}

export default Descricao