import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useLocation } from "react-router-dom";
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

  // const location = useLocation();
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   // execute on location change
  //   setCount(count + 1);
  //   console.log("Location changed!", location.pathname);
  // }, [location]);

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        href={props.href}
        className={buttonVariants({
          variant: isActive ? "secondary" : "ghost",
        })}
      >
        {props.children}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
