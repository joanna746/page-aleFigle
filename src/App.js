import React from 'react';
import Products from './components/Products/Products';
import styles from './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';




const App = () => {
  return (

    <div className={styles.body}>
    <BrowserRouter>
   
    <NavBar/>
    <Products/>
    </BrowserRouter>
    </div>
  );
};

export default App;
