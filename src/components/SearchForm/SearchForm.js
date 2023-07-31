import React, { useState } from 'react';
import productsData from '../../data/products';
import styles from './SearchForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';





const SearchForm = () => {
  
  const [keyword, setKeyword] = useState('');

  
  const [foundProducts, setFoundProducts] = useState([]);

  const filter = (e) => {
    const keyword = e.target.value.toLowerCase();
    setKeyword(keyword);

    if (keyword !== '') {
      const results = productsData.filter((product) => {
        return (
          product.title.toLowerCase().includes(keyword) ||
          product.name.toLowerCase().includes(keyword)
        );
      });
      setFoundProducts(results);
    } else {
      setFoundProducts([]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
      <input
        type="search"
        value={keyword}
        onChange={filter}
        className={styles.input}
        placeholder="Wyszukaj produkt"
        
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon}/>
      </div>
      {keyword !== '' && (
        <div className="product-list">
          {foundProducts && foundProducts.length > 0 ? (
            foundProducts.map((user) => (
              <li key={user.id} className="product">
                <span className="product-title">{user.title} </span>
              </li>
            ))
          ) : (
            <h1>Brak rezultatów!</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchForm;

