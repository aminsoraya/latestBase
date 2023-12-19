import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "@/styles/menu.module.scss";
import { FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaMap } from "react-icons/fa6";
import Container from "../container";
import containerStyles from "@/styles/container.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppStore } from "@/hooks/store";

let links = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Inventory",
    sub: [
      {
        text: "All Inventory",
        link: "//",
      },
      {
        text: "Appraise My Trade",
        link: "/appraise-my-trade",
      },
      {
        text: "Car Finder",
        link: "/car-finder",
      },
    ],
  },
  {
    text: "Finance",
    sub: [
      {
        text: "Finance Application",
        link: "/finance-application",
      },
      {
        text: "Finance Calculator",
        link: "/finance-calculator",
      },
    ],
  },
  {
    text: "Dealership",
    sub: [
      {
        text: "About Us",
        link: "/about-us",
      },
      {
        text: "Contact Us",
        link: "/contact-us",
      },
      {
        text: "Book Appointment",
        link: "/book-appointment",
      },
    ],
  },
  {
    text: "Text Us Now",
    link: "/text-us-now",
  },
];
const Menu = () => {
  let [showBurgerMenu, setShowBurgerMenu] = useState(false);
  let { currentMenu } = useAppStore();
  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked element is outside the div
      if (divRef.current && !divRef.current.contains(event.target)) {
        setShowBurgerMenu(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Container className={containerStyles.absoloute}>
      <div className={styles.main}>
        <div
          className={styles.burger}
          onClick={() => setShowBurgerMenu((state) => !state)}
          ref={divRef}
        >
          <GiHamburgerMenu />
          <ul
            className={` ${styles.bur_menu}`}
            style={{ display: showBurgerMenu ? "flex" : "none" }}
          >
            {links.map((menu, index) => {
              return (
                <li key={index} className={styles.bur_item}>
                  <Link href={menu.link ?? ""}>{menu.text}</Link>
                  {/* <ul className="submenu">
                    {menu?.sub?.map((submenu, sIndex) => {
                      return (
                        <li key={sIndex}>
                          <Link href={submenu.link ?? ""}>{submenu.text}</Link>
                        </li>
                      );
                    })}
                  </ul> */}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className={styles.menu}>
          {links.map((menu, index) => {
            return (
              <li
                key={index}
                className={`${styles.item} ${
                  (currentMenu == menu.link ||
                    menu?.sub?.findIndex((s) => s?.link == currentMenu) > -1) &&
                  styles.active
                }`}
              >
                <Link
                  href={menu.link ?? ""}
                  legacyBehavior
                  className={styles.parent}
                >
                  {menu.text}
                </Link>

                <ul className={styles.submenu}>
                  {menu?.sub?.map((submenu, sIndex) => {
                    return (
                      <li key={sIndex}>
                        <Link href={submenu.link ?? ""}>{submenu.text}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <div className={styles.icons}>
          <FaClock />
          <FaPhone />
          <FaMap />
        </div>
        <div className={styles.logo}>
          <h6>United Auto Sales Ltd</h6>
        </div>
      </div>
    </Container>
  );
};

export default Menu;
