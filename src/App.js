import React from 'react';
import styles from './styles/global.scss';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Niemowlak from './pages/Niemowlak';
import Home from './pages/Home';
import Products from './components/Products/Products';




const App = () => {
  return (

    <div className={styles.body}>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/Niemowlak-produkty" element={<Niemowlak/>}/>
    <Route path="/" element={<Home />} />
    </Routes>
    
    
    </BrowserRouter>
    </div>
  );
};

export default App;
