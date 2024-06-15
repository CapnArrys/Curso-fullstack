import React from 'react'
import './App.css'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import Mensagem from './components/Mensagem'

const App = () => {
  
  return (
    <div className="container">
      <h1>Renderização Condicional Simples</h1>
      <Mensagem tipo="sucesso"/>
      <Mensagem tipo="erro"/>
      <Mensagem tipo="aviso"/>

    

    </div> 

  )
}

export default App