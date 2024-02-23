import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation(["translation"]);

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/about_me">{t("aboutMe")}</NavigationLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavigationLink(props: { href: string; children: string }) {
  const location = useLocation();
  const pathname: string = location.pathname;
  const path: string = props.href;
  const isActive: boolean = pathname === path;

  return (
    <NavigationMenuItem>
      <Link
        to={props.href}
        className={buttonVariants({
          variant: isActive ? "secondary" : "ghost",
        })}
      >
        {props.children}
      </Link>
    </NavigationMenuItem>
  );
}
