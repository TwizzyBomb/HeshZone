import AbHeader from '../../assets/ab-simple.png';
import styles from './Header.module.css';

export default function Header() {

  return (
    <header>
      <img src={AbHeader} alt="Stylized atom" />
      <h1>Welcome to the portal</h1>
        <p>I'm Adrian Brocke, an athletic nerd with a taste for novel experiences.</p>
      <div className={styles['scroll-indicator']}>
        <p className="down">Scroll</p>
        <p className="down">↓</p>
      </div>
    </header>
  );
}
