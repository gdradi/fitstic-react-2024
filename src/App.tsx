import styles from './App.module.scss';
import logo from "./assets/logo512.png";


export default function App() {
  return (
    <div className={styles.title}>
      <img src={logo} alt="logo" />
      <div>Fitstic React 2024</div>
    </div>
  );
}