import React, { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1)

    const incrementarContador = () => {
        setContador(contador + 1);

    }

    const decrementarContador = () => {
        setContador(contador - 1);

    }
  return (
    <div className='container'>
       

        <h2>Contador: {contador}</h2>

        <button onClick={incrementarContador}>
            Incrementar contador
        </button>
        <br /> <br />

        <button onClick={decrementarContador}>
            Decrementar contador

        </button>
        
        

    </div>
  )
}

export default HookContador