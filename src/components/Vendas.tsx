import ContentNav from './ContentNav';
import Head from './Head';
import styles from './css/Vendas.module.css';
import { Route, Routes } from 'react-router-dom';
import TodasVendas from './TodasVendas';
import Venda from './Venda';

const Vendas = () => {
  return (
    <>
      <Head
        titulo="Fintech | Vendas"
        descricao="Página de Vendas que mostra os compradores nos últimos 4 meses."
      />
      <main className={styles.main}>
        <ContentNav titulo="Vendas" />
        <Routes>
          <Route path="/" element={<TodasVendas />} />
          <Route path="*" element={<Venda />} />
        </Routes>
      </main>
    </>
  );
};

export default Vendas;
