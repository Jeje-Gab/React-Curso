import './App.css';
// 1 - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Importamento das pages
import Home from './pages/Home';
import About from './pages/About';

// Importamento dos components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/*// 2 - Links com react router*/}
      <Navbar/> {/*Elemento que se repete entre as rotas*/}
        <Route>
          {/*O que esta sempre aqui dentro é o que muda, há rota*/}
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
