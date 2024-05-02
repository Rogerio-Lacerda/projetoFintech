import SvgFintech from '../assets/FintechSVG';
import styles from './css/Header.module.css';
import SvgResumo from '../assets/icons/resumo.svg';
import SvgVendas from '../assets/icons/vendas.svg';
import SvgWebhooks from '../assets/icons/webhooks.svg';
import SvgConfiguracoes from '../assets/icons/configuracoes.svg';
import SvgContato from '../assets/icons/contato.svg';
import SvgSair from '../assets/icons/sair.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <SvgFintech title="Fintech Logo" />
      <nav className={styles.navegacao}>
        <ul>
          <li>
            <img src={SvgResumo} alt="" />
            <NavLink to="/" end>
              Resumo
            </NavLink>
          </li>
          <li>
            <img src={SvgVendas} alt="" />
            <NavLink to="/vendas">Vendas</NavLink>
          </li>
          <li>
            <img src={SvgWebhooks} alt="" />
            Webhooks
          </li>
          <li>
            <img src={SvgConfiguracoes} alt="" />
            Configurações
          </li>
          <li>
            <img src={SvgContato} alt="" />
            Contato
          </li>
          <li>
            <img src={SvgSair} alt="" />
            Sair
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
