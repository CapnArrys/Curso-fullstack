import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Noticias from './pages/Noticias'
import Dpolgpd from './pages/Dpolgpd'
import Navbar from './components/Navbar'
import VisualizarNoticia from './pages/VisualizarNoticia'
const App = () => {
  return (
    <BrowserRouter>
    <h1>Uniesp - Centro Universitário</h1>
    <Navbar />
    <Routes>

      <Route path='/' element={<Inicial />}>
        
      </Route>

      <Route path='/noticias' element={<Noticias />}>
        
      </Route>

      <Route path='/dpo-lgpd' element={<Dpolgpd/>}>

      </Route>

      <Route path='/visualizar-noticia/:id' element={<VisualizarNoticia/>}>

      </Route>

    </Routes>

    </BrowserRouter>
  )
}

export default App