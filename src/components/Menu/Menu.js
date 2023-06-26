import styles from './Menu.module.scss';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';




const Menu= ()=>{
return(
    <div className={styles.menu}>
       <img 
          className={styles.image}
          alt='ale figle'
          src={`${process.env.PUBLIC_URL}/images/logo-firmy.jpg`} />

      <ul className={styles.listItem}>
        <Navigation text='Niemowlak'/>
        <Navigation text='Dziewczynka'/>
        <Navigation text='Chłopiec'/>
        <Navigation text='Promocje'/>
        <Navigation text='Nowości'/>
      </ul>
      <div className={styles.element}>
      <Button icon='search'/>
      <Button icon='user'/>
      <Button icon='heart'/>
      <Button icon='shop'/>
      </div>
    </div>
)
}
export default Menu;