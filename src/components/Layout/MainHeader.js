import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = props => {
  return (
    <header className={classes.header}>
      <h1>Ankara</h1>
      <ul>
        <li>About</li>
        <li>
          <CartButton />
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
