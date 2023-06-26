import { Link } from 'react-router-dom';
import styles from './Button.module.scss';



const Button = ()=>{
return(
    <div className={styles.button}>
     <Link to="signup"   >
        <button className={styles.btn}>Wyszukaj</button>
        <button className={styles.btn}>Ulubione</button>
        <button className={styles.btn}>Zaloguj</button>
        <button className={styles.btn}>Koszyk</button>
     </Link>
    </div>
)
}
export default Button;