import React from 'react';
import styles from './css/ContentNav.module.css';
import DateInput from './DateInput';
import { useUser } from '../globalContext/UserContext';
import Meses from './Meses';

const formsFields = [
  {
    label: 'Início',
    id: 'inicio',
  },
  {
    label: 'Final',
    id: 'final',
  },
];

const ContentNav = ({ titulo }: { titulo: string }) => {
  const { dates, setDates } = useUser();

  function handleChange({ target }: React.ChangeEvent) {
    if (target instanceof HTMLInputElement) {
      setDates({ ...dates, [target.id]: target.value });
    }
  }

  return (
    <section className={styles.contentNav}>
      <div className={styles.content}>
        <form className={styles.formDate} onSubmit={(e) => e.preventDefault()}>
          {formsFields.map((item) => (
            <DateInput
              key={item.id}
              label={item.label}
              id={item.id}
              value={dates[item.id]}
              handleChange={handleChange}
            />
          ))}
        </form>
        <h1 className={styles.titulo}>{titulo}</h1>
      </div>
      <div className={styles.contentMeses}>
        <Meses n={-3} />
        <Meses n={-2} />
        <Meses n={-1} />
        <Meses n={0} />
      </div>
    </section>
  );
};

export default ContentNav;
