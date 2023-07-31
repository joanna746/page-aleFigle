import React from 'react';
import styles from './styles/global.scss';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Niemowlak from './pages/Niemowlak/Niemowlak';
import Home from './pages/Home';
import Promocje from './pages/Promocje/Promocje';
import Nowości from './pages/Nowości/Nowości'
import SearchForm from './components/SearchForm/SearchForm';




const App = () => {
  return (

    <div className={styles.body}>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/Niemowlak-produkty" element={<Niemowlak/>}/>
    <Route path="/" element={<Home />} />
    <Route path="/Promocje" element={<Promocje />} />
    <Route path="/Nowości" element={<Nowości />} />
    
    </Routes>
    
    </BrowserRouter>
    
    </div>
  );
};

export default App;
