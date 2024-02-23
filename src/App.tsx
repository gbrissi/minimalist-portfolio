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
  useNavigate,
  Link,
} from "react-router-dom";
import { Button } from "./components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [lang, _] = useLocalStorage("lang", i18n.language);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <Flex direction="column" className="min-h-screen px-8 xl:px-4">
      <Appbar />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Outlet />}>
            <Route index element={<Navigate to="/" replace />} />
            <Route
              path="better_calculator"
              element={<BetterCalculatorView />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </Flex>
  );
}

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Button
          variant="ghost"
          className="rounded-full w-16 h-16"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="xl"
            className="opacity-80 hover:opacity-100"
          />
        </Button>

        <Heading className="text-4xl">404 - Page not found</Heading>
        <Text className="text-lg font-light opacity-80">
          The page that you are trying to access doesn't exists or it's not
          available any longer <br />
          Please, make sure the URL is correct, otherwise, notify the website
          developer about the error
        </Text>

        <Button asChild variant="default" className="px-4 w-min rounded-full">
          <Link to={"/"}>
            <Flex className="gap-4 justify-center items-center">
              <FontAwesomeIcon icon={faChevronRight} />
              <Text className="text-lg font-light">Go back home</Text>
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

function BetterCalculatorView() {
  return <Heading>Project View</Heading>;
}
