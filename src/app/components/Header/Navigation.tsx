import { NavLink } from "../common/NavLink";
import { useTranslations } from "next-intl";

export const Navigation = () => {
  const t = useTranslations("Navigation");

  const navItems = [
    {
      id: 1,
      title: t("home"),
      link: "/",
    },
    {
      id: 2,
      title: t("about-us"),
      link: "/about-us",
    },
    {
      id: 3,
      title: t("prices"),
      link: "/prices",
    },
    {
      id: 4,
      title: t("contact"),
      link: "/contact",
    },
  ];

  return (
    <nav>
      {navItems.map((item) => {
        return (
          <span style={{ margin: "0 10px" }} key={item.id}>
            <NavLink href={item.link}>{item.title}</NavLink>
          </span>
        );
      })}
      {/* <NavLink href="/">Home</NavLink>
      <NavLink href="/about-us">About Us</NavLink>
      <NavLink href="/prices">Prices</NavLink>
      <NavLink href="/contact">Contact</NavLink> */}
    </nav>
  );
};
