import React from 'react'

const Divisao = (props) => {
    const resultado = props.num1 / props.num2;
  return (
    <div className="operacao">
    <h1>O resultado de {props.num1} / {props.num2} é: {resultado}</h1>
    </div>
  )
}

export default Divisao