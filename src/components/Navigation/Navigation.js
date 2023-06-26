import dropdown from '../../data/menu';
import styles from './Navigation.module.scss';
import React, { useState, useEffect, useRef } from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Container from '../Container/Container';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const selectedItem = dropdown.find((item) => item.buttonText === props.text);

  return (
    <Container>
      
      <div className={styles.dropdown} ref={dropdownRef}>
        <div className={styles.dropdownMenu} onClick={handleClick}>
          {selectedItem && (
            <button className={styles.button}>{selectedItem.buttonText}</button>
          )}
        </div>
        {isOpen && selectedItem && (
          <ul className={styles.listNav}>
          {selectedItem.items.map((item) => (
            <li key={item.id}>
              <li className={styles.things} to={item.path}>
                {item.title}
              </li>
            </li>
          ))}
        </ul>
        
        )}
      </div>
    </Container>
  );
};

export default Navigation;
