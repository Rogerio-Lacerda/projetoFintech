import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Resumo from './components/Resumo';
import Vendas from './components/Vendas';
import { UserContextProvider } from './globalContext/UserContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <UserContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas/*" element={<Vendas />} />
            </Routes>
          </UserContextProvider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
