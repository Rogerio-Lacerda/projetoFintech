import { useUser } from '../globalContext/UserContext';
import Loading from './Loading';
import styles from './css/Vendas.module.css';
import { Link } from 'react-router-dom';

const TodasVendas = () => {
  const { data, error, loading } = useUser();

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
    if (data.length <= 0)
      return (
        <section>
          <div className={styles.venda}>
            <div>
              <p>Não existem vendas nesse período</p>
            </div>
          </div>
        </section>
      );
    else
      return (
        <section className={styles.vendas}>
          {data.map((item) => {
            return (
              <div key={item.id} className={styles.venda}>
                <div className={styles.vendaInfo}>
                  <Link to={`${item.id}`}>{item.id}</Link>
                  <p>{item.nome}</p>
                </div>
                <p>
                  {item.preco.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </div>
            );
          })}
        </section>
      );
  return null;
};

export default TodasVendas;
