import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../data/dropdown";
import styles from "./NavBar.module.scss";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import clsx from "clsx";
import { serviceDropdown } from "../../data/dropdown";

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navRef = useRef(null);

  const handleClick = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory("");
      setDropdown(false);
    } else {
      setSelectedCategory(category);
      setDropdown(true);
    }
  };

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setSelectedCategory("");
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <Link to="/">
        <div className={styles.image}>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo-firmy.jpg`}
            alt="ale figle"
            width="100px"
            height="100px"
          />
        </div>
      </Link>
      <ul className={styles.navItems}>
        {navItems.map((item) => {
          if (
            item.title === "Niemowlak" ||
            item.title === "Dziewczynka" ||
            item.title === "Chłopiec"
          ) {
            return (
              <li
                key={item.id}
                className={clsx(item.cName, styles.navItem)}
                onClick={() => handleClick(item.title)}
              >
                <Link to={item.path}>{item.title}</Link>
                {dropdown && item.title === selectedCategory && (
                  <Dropdown
                    items={serviceDropdown.find(
                      (dropdownItem) =>
                        dropdownItem.title === selectedCategory
                    ).submenu}
                  />
                )}
              </li>
            );
          }
          return (
            <li key={item.id} className={clsx(item.cName, styles.navItem)}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <Button />
    </nav>
  );
};

export default NavBar;
