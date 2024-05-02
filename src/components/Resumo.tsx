import ContentNav from './ContentNav';
import Head from './Head';
import { useUser } from '../globalContext/UserContext';
import styles from './css/Resumo.module.css';
import Faturamento from './Faturamento';
import Grafico from './Grafico';
import Loading from './Loading';

const Resumo = () => {
  const { data, error, loading } = useUser();

  return (
    <>
      <Head
        titulo="Fintech | Resumo"
        descricao="Página Resumo que mostra dados de vendas nos últimos 4 meses."
      />
      <main className={styles.main}>
        <ContentNav titulo="Resumo" />
        {loading ? <Loading /> : null}
        {error ? <p style={{ color: 'red' }}>{error}</p> : null}
        {data ? (
          <>
            <Faturamento
              data={data.map((item) => {
                return { preco: item.preco, status: item.status };
              })}
            />
            <Grafico data={data} />
          </>
        ) : null}
      </main>
    </>
  );
};

export default Resumo;
