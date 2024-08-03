
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';


//pages
import Home from './pages/Home';
import CadastrarAluno from './pages/CadastrarAluno';
import ListarAluno from './pages/ListarAluno';

//componentes
import NavBar from './componentes/NavBar';

function App() {
 

  return (
    <>

    <BrowserRouter>

    <NavBar />
    
      <Routes>

    <Route path='/' element={<Home />} />

    <Route path='/cadastrar' element={<CadastrarAluno />} />

    <Route path='/listar' element={<ListarAluno />} />

      </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
