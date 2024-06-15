import React from 'react'
import Adicao from './components/Adicao'
import './App.css'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit'

const App = () => {
  return (
    <div className="container">
      <h1>Conversão de unidades</h1>
  
    <CelsiusParaFahrenheit celsius={25} />

    </div> 

    
    
  )
}

export default App