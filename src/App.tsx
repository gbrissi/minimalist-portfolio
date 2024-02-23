import Appbar from "./components/widgets/app_bar";
import Footer from "./components/widgets/footer";
import IntroductionSection from "./components/widgets/introduction_section";
import { Container, Flex } from "@radix-ui/themes";
import ProjectsSection from "./components/widgets/projects_section";
import { useEffect } from "react";
import i18n from "./i18n/i18n";
import { useLocalStorage } from "usehooks-ts";

export default function App() {
  const [lang, _] = useLocalStorage("lang", i18n.language);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <Flex direction="column" className="min-h-screen px-8 xl:px-4">
      <Appbar />
      <Container>
        <IntroductionSection />
        <ProjectsSection />
      </Container>
      <Footer />
    </Flex>
  );
}
