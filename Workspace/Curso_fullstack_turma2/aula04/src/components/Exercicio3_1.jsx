import React from 'react'

const Exercicio3_1 = () => {
    const condicional = true;
  var estilo = condicional

  if (condicional == true) {
    estilo = {
      color: "#0000ff",
      backgroundColor: '#ffc0cb',
      width: "300px",
      padding: "15px"
    }

  } else {
    estilo = {
      color: "#000000",
      backgroundColor: '#ffffff',
      width: "250px",
      padding: "5px"

    }

  }
  return (
    <div style={estilo}>
      Texto com estilo inline dinâmico
      
    </div>
  )
}

export default Exercicio3_1