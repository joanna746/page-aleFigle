import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from './Dropdown.module.scss';
import clsx from "clsx";



const Dropdown = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
  
    const handleDropdownClick = () => {
      setDropdown(!dropdown);
    };
  
    return (
      <div className={styles.serviceMenu}>
        <ul
          className={dropdown ? 'services-submenu clicked' : 'services-submenu'}
          onClick={handleDropdownClick}
        >
          {items.map((item) => {
            return (
              <li key={item.id} >
                <Link
                  to={item.path}
                  className={clsx(item.cName, styles.submenuItem)}
                  onClick={() => setDropdown(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
export default Dropdown;