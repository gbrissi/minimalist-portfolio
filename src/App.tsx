import Appbar from "./components/widgets/app_bar";
import Footer from "./components/widgets/footer";
import IntroductionSection from "./components/widgets/introduction_section";
import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import ProjectsSection from "./components/widgets/projects_section";
import { useEffect } from "react";
import i18n from "./i18n/i18n";
import { useLocalStorage } from "usehooks-ts";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";
import { Button } from "./components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import BackButton from "./components/widgets/back_button";

export default function App() {
  const [lang, _] = useLocalStorage("lang", i18n.language);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <Flex direction="column" className="min-h-screen px-8 xl:px-4">
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/projects" element={<Outlet />}>
            <Route index element={<Navigate to="/" replace />} />
            <Route path="easy_2_clip" element={<Easy2ClipView />} />{" "}
            <Route path="easy_clip_2_gif" element={<EasyClip2GIFView />} />{" "}
            <Route path="freedu" element={<FreeduView />} />{" "}
            <Route path="better_calculator" element={<BetterCalculator />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Flex>
  );
}

function NotFound() {
  const { t } = useTranslation(["translation"]);

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <BackButton />
        <Heading className="text-4xl">{t("pageNotFoundError")}</Heading>
        <Text className="text-lg font-light opacity-80">
          {t("pageNotFoundDescription")} <br />
          {t("checkUrl")}
        </Text>
        <Button asChild variant="default" className="px-4 w-min rounded-full">
          <Link to={"/"}>
            <Flex className="gap-4 justify-center items-center">
              <FontAwesomeIcon icon={faChevronRight} />
              <Text className="text-lg font-light">{t("goBackHome")}</Text>
            </Flex>
          </Link>
        </Button>
      </div>
    </Container>
  );
}

function Home() {
  return (
    <Container>
      <IntroductionSection />
      <ProjectsSection />
    </Container>
  );
}

function AboutMe() {
  return (
    // TODO: Temporary only.
    <ProjectView title="About me" />
  );
}

function BetterCalculator() {
  return <ProjectView title="BetterCalculator" />;
}

function EasyClip2GIFView() {
  return <ProjectView title="EasyClip2GIF" />;
}
function Easy2ClipView() {
  return <ProjectView title="Easy2Clip" />;
}
function FreeduView() {
  return <ProjectView title="Freedu" />;
}

interface ProjectViewProps {
  title: string;
  // children?: string;
}

function ProjectView(props: ProjectViewProps) {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <BackButton />
        <Heading>{props.title}</Heading>
        <Text>Coming soon...</Text>
      </div>
    </Container>
  );
}
