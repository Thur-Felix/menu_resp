import { Routes, Route } from 'react-router-dom'
import Home from './paginas/Home'
import Henry from './paginas/Henry'

function Rotas() {
    return(
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/henry' element={ <Henry />} />
        </Routes>
    )
}

export default Rotas