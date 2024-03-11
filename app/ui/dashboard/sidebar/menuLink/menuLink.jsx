"use client";
import styles from "./menuLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const patname = usePathname();
  console.log(patname);

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        patname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
