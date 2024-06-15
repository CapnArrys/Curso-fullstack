import React from 'react'
import Image from '../assets/react.svg'

const TrabalhandoComImagens = () => {
  return (
    <div className="container">

        <div className="imagens">
        <img src="vite.svg" alt="Imagem da pasta public" />
           
        </div>
        <div className="imagens">
        <img src={Image} alt="Imagem da pasta assets" />

        </div>
    </div>
  )
}

export default TrabalhandoComImagens