"use client";

import styles from "@/app/styles/Header.module.css";
import { useTranslations } from "next-intl";
import { Navigation } from "./Navigation";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";

export const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <LanguageSwitch />
      {t("title")}
    </header>
  );
};
