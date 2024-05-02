import React from 'react';
import useFetch from '../hooks/useFetch';

export interface VendasData {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  parcelas: null | number;
  data: string;
}

interface FormData {
  inicio: string;
  final: string;
  [key: string]: string;
}

interface IuserContext {
  dates: FormData;
  setDates: React.Dispatch<React.SetStateAction<FormData>>;
  data: VendasData[] | null;
  error: string | null;
  loading: boolean;
}

const UserContext = React.createContext<IuserContext | null>(null);

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const ano = date.getFullYear();
  const mes =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : String(date.getMonth() + 1);
  const dia =
    date.getDate() < 10 ? `0${date.getDate()}` : String(date.getDate());
  return { ano, mes, dia };
}

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) throw new Error('userContext deve estar dentro do Provider');
  return context;
};

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const final = getDate(0);
  const inicio = getDate(15);

  const [dates, setDates] = React.useState<FormData>({
    inicio: `${inicio.ano}-${inicio.mes}-${inicio.dia}`,
    final: `${final.ano}-${final.mes}-${final.dia}`,
  });
  const { data, error, loading, request } = useFetch<VendasData[]>(
    `https://data.origamid.dev/vendas/?inicio=${dates.inicio}&final=${dates.final}`,
  );

  React.useEffect(() => {
    const fetchVenda = () => {
      request();
    };
    fetchVenda();
  }, [request]);

  return (
    <UserContext.Provider value={{ dates, setDates, data, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};
