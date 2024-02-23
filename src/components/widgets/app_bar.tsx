import { Container, Flex, Box } from "@radix-ui/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";
import { useLocalStorage } from "usehooks-ts";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useTranslation } from "react-i18next";

export default function Appbar() {
  return (
    <>
      <Container className="p-4 grow-0">
        <Flex justify="end" className="gap-4">
          <LangSwitcher />
          <ThemeSwitcher />
        </Flex>
      </Container>
    </>
  );
}

function ThemeSwitcher() {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode: boolean = darkModeMediaQuery.matches;
  const defaultTheme: string = isDarkMode ? "dark" : "light";
  const [theme, setTheme] = useLocalStorage("theme", defaultTheme);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const [enabled, setEnabled] = useState(theme === "light");

  const handleThemeChange = (enabled: boolean) => {
    setTheme(enabled ? "light" : "dark");
    setEnabled(enabled);
  };

  return (
    <IconButton
      icon={!enabled ? faMoon : faSun}
      onClick={() => handleThemeChange(!enabled)}
    />
  );
}

function LangSwitcher() {
  const { t, i18n } = useTranslation(["translation"]);
  const [_, setLang] = useLocalStorage("lang", i18n.language);

  const onClickLanguageChange = (lang: string) => {
    setLang(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Box>
          <IconButton icon={faGlobe} />
        </Box>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel> {t("langLabel")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onClickLanguageChange("en")}>
          {t("englishSelect")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onClickLanguageChange("pt")}>
          {t("portugueseSelect")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface IconButtonProps {
  onClick?: () => void;
  icon: IconProp;
}
function IconButton(props: IconButtonProps) {
  return (
    <Button
      variant="secondary"
      className="rounded-full w-8 h-8"
      onClick={props.onClick}
    >
      <FontAwesomeIcon
        icon={props.icon}
        size="lg"
        className="opacity-80 hover:opacity-100"
      />
    </Button>
  );
}
