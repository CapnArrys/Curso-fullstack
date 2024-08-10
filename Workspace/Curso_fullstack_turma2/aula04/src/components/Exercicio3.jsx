import React from 'react'

const Exercicio3 = () => {
    const condicional = true;
  var estilo = condicional

  if (condicional == true) {
    estilo = {
      color: "#ffa500",
      backgroundColor: '#808080',
      height: "150px",
      margin: "20px"
    }

  } else {
    estilo = {
      color: "#008000",
      backgroundColor: '#ffff00',
      height: "100px",
      margin: "10px"

    }}
  return (
    <div style={estilo}>
      Texto com estilo inline dinâmico
      
    </div>
  )
}

export default Exercicio3