import styles from './css/Resumo.module.css';

interface VendasPreco {
  preco: number;
  status: string;
}

const Faturamento = ({ data }: { data: VendasPreco[] }) => {
  let recebido = 0;
  let processando = 0;

  const precos = data.reduce(
    (acc, item) => {
      if (item.status === 'pago') {
        recebido += item.preco;
      } else if (item.status === 'processando') {
        processando += item.preco;
      }

      return [
        ['Vendas', recebido + processando],
        ['Recebido', recebido],
        ['Processando', processando],
      ];
    },
    [['', 0]],
  );

  if (data.length <= 0)
    return (
      <section className={styles.faturamento}>
        <div>
          <h2>Vendas</h2>
          <p>R$ 0,00</p>
        </div>
        <div>
          <h2>Recebidos</h2>
          <p>R$ 0,00</p>
        </div>
        <div>
          <h2>Processando</h2>
          <p>R$ 0,00</p>
        </div>
      </section>
    );
  return (
    <section className={styles.faturamento}>
      {precos.map((preco) => (
        <div key={preco[0]}>
          <h2>{preco[0]}</h2>
          <p>
            {preco[1].toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Faturamento;
