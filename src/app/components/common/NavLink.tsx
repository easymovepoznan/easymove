import Link from "next/link";
import { ReactNode } from "react";
import styles from "@/app/styles/NavLink.module.css";

type LinkProps = {
  href: string;
  children: string | ReactNode;
};

export const NavLink = ({ href, children }: LinkProps) => {
  return (
    <Link className={styles.navLink} href={href}>
      {children}
    </Link>
  );
};
