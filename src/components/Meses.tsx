import { useUser } from '../globalContext/UserContext';

function getMes(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  const mes = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
  return { date, mes: mes.replace(mes[0], mes[0].toUpperCase()) };
}

const Meses = ({ n }: { n: number }) => {
  const { setDates } = useUser();
  const dateMes = getMes(n);

  function handleClick(date: Date) {
    const ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const ano = date.getFullYear();
    const mes = date.getMonth() + 1;

    const inicio = `${ano}-${mes < 10 ? `0${mes}` : mes}-01`;
    const final = `${ano}-${mes < 10 ? `0${mes}` : mes}-${ultimoDia.getDate()}`;

    setDates({ inicio, final });
  }

  return (
    <>
      <button onClick={() => handleClick(dateMes.date)}>{dateMes.mes}</button>
    </>
  );
};

export default Meses;
