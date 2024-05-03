import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import styles from './css/Vendas.module.css';
import Loading from './Loading';

interface Venda {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  parcelas: null | number;
}

const Venda = () => {
  const { pathname } = useLocation();
  const url = pathname.replace('/projetoFintech', '');
  const { data, error, loading, request } = useFetch<Venda>(
    `https://data.origamid.dev${url}`,
  );

  React.useEffect(() => {
    const fetchVenda = () => {
      request();
    };
    fetchVenda();
  }, [request]);

  if (loading)
    return (
      <section className={styles.vendas}>
        <Loading />
      </section>
    );
  if (error)
    return (
      <section className={styles.vendas}>
        <p>{error}</p>{' '}
      </section>
    );
  if (data)
    return (
      <section className={styles.vendas}>
        <div className={styles.venda}>
          <p className={styles.idUser}>ID: {data.id}</p>
        </div>
        <div className={styles.venda}>
          <p>Nome: {data.nome}</p>
        </div>
        <div className={styles.venda}>
          <p>
            Preço:{' '}
            {data.preco.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>
        <div className={styles.venda}>
          <p>Status: {data.status}</p>
        </div>
        <div className={styles.venda}>
          <p>Pagamento: {data.pagamento}</p>
        </div>
      </section>
    );
  return null;
};

export default Venda;
