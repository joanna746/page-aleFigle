
import styles from './Button.module.scss';




const Button = ()=>{
return(
    <div className={styles.button}>
    
        <button className={styles.btn}>Ulubione</button>
        <button className={styles.btn}>Zaloguj</button>
        <button className={styles.btn}>Koszyk</button>
       
    </div>
)
}
export default Button;