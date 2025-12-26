"use client";

import styles from "@/app/styles/Header.module.css";
import { Navigation } from "./Navigation";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <LanguageSwitch />
    </header>
  );
};
