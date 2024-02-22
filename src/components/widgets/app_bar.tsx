import { Container, Flex } from "@radix-ui/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";
import { useLocalStorage } from "usehooks-ts";
import { useEffect, useState } from "react";

export default function Appbar() {
  return (
    <>
      <Container className="p-4 grow-0">
        <Flex justify="end">
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
    <Button
      variant="secondary"
      className="rounded-full w-8 h-8"
      onClick={() => handleThemeChange(!enabled)}
    >
      <FontAwesomeIcon
        icon={!enabled ? faMoon : faSun}
        size="lg"
        className="opacity-80 hover:opacity-100"
      />
    </Button>
  );
}
