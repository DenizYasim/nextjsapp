"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import ToggleDarkMode from "../ToggleDarkMode/ToggleDarkMode";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contacts",
    url: "/contacts",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        OmegaCringe
      </Link>
      <div className={styles.links}>
        <ToggleDarkMode />
        {links.map((link) => (
          <Link href={link.url} key={link.id} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button
          className={styles.logout}
          onClick={() => {
            console.log("ayy lmao");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
