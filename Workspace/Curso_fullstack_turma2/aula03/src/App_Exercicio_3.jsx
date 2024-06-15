import React from 'react'
import Adicao from './components/Adicao'
import './App.css'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit'
import ListaDeLivros from './components/ListaDeLivros'

const App = () => {
  const livros = [{ titulo: "Senhor dos Aneis" , autor: "J.R.R Tolkien" , ano: "1954"},
    {titulo: "Harry Potter" , autor: "J. K Rowling" , ano: "1997"},
    {titulo: "!@#)%(@&?°§ºª" , autor: "????" , ano: "0000"}
  ];
  return (
    <div className="container">
      { <ListaDeLivros livros={livros}/>

      }
    

    </div> 

    
    
  )
}

export default App