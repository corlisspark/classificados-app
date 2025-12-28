import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <h2>Classificados</h2>
      <Link to="/form/0" className="div-grey link" id="btn-add">
        + Novo classificado
      </Link>
    </header>
  );
}

export default Header;
