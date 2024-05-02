import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { VendasData } from '../globalContext/UserContext';
import styles from './css/Resumo.module.css';

interface DadosGrafico {
  data: string;
  pago: number;
  falha: number;
  processando: number;
}

function transformarData(data: VendasData[]): DadosGrafico[] {
  const diasVendas = data.reduce(
    (acc: { [key: string]: DadosGrafico }, item) => {
      const dataLimpa = item.data.split(' ')[0].slice(5);
      if (!acc[dataLimpa]) {
        acc[dataLimpa] = {
          data: dataLimpa,
          pago: 0,
          falha: 0,
          processando: 0,
        };
      }
      if (
        item.status === 'falha' ||
        item.status === 'pago' ||
        item.status === 'processando'
      ) {
        acc[dataLimpa][item.status] += item.preco;
      }
      return acc;
    },
    {},
  );

  return Object.values(diasVendas);
}

const Grafico = ({ data }: { data: VendasData[] }) => {
  const dadosGrafico = transformarData(data);
  const error = console.error;
  console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  if (data)
    return (
      <section className={styles.grafico}>
        <ResponsiveContainer width="99%" height={400}>
          <LineChart width={400} height={400} data={dadosGrafico}>
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pago"
              stroke="#A36AF9"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="processando"
              stroke="#FBCB21"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="falha"
              stroke="#000"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    );
  return null;
};

export default Grafico;
