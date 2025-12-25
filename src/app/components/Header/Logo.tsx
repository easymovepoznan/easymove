import Link from "next/link";
import styles from "@/app/styles/Logo.module.css";

export const Logo = () => {
  return (
    <div>
      <Link href="/" className={styles.logo}>
        <h2>EasyMove</h2>
      </Link>
    </div>
  );
};
