import Appbar from "./components/widgets/app_bar";
import Footer from "./components/widgets/footer";
import IntroductionSection from "./components/widgets/introduction_section";
import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import ProjectsSection from "./components/widgets/projects_section";
import React, { useEffect } from "react";
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
import { Link as Anchor } from "@radix-ui/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEye } from "@fortawesome/free-solid-svg-icons";
import { Trans, useTranslation } from "react-i18next";
import BackButton from "./components/widgets/back_button";
import {
  FlutterSVG,
  MaterialDesignSVG,
} from "./components/widgets/stack_icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

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
          <Route path="/about-me" element={<AboutMe />} />
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
    <NewPagePlaceholder title="About me" />
  );
}

function EasyClip2GIFView() {
  return <NewPagePlaceholder title="EasyClip2Gif" />;
}
function Easy2ClipView() {
  return <NewPagePlaceholder title="Easy2Clip" />;
}
function FreeduView() {
  return <NewPagePlaceholder title="Freedu" />;
}

// TODO: element that can use hyperlinks, bold and italic elements.
type CustomText = React.ReactNode;

interface ProjectViewProps {
  title: string;
  imageUrl?: string;
  websitePreview: string;
  sourceCodeUrl: string;
  description: CustomText;
  installation: CustomText; // element that can use hyperlinks, bold and italic elements
  stack: React.ReactNode[];
}

// title, image, description, installation guide, stack, preview button, source code view

function BetterCalculator() {
  const { t } = useTranslation(["translation"]);

  return (
    <ProjectView
      sourceCodeUrl="https://www.github.com/gbrissi/better_calculator"
      websitePreview="https://bettercalculator.rissi.dev"
      title="BetterCalculator"
      imageUrl="https://raw.githubusercontent.com/gbrissi/better_calculator/main/preview/preview_app.gif"
      description={
        <Trans
          t={t}
          i18nKey="betterCalculatorDescription"
          components={{
            Anchor: (
              <Anchor
                href="https://flutter.dev"
                target="_blank"
                rel="noreferrer"
              >
                Github Link
              </Anchor>
            ),
            Text: <Text>Text data</Text>,
          }}
        />
      }
      installation={
        <Trans
          t={t}
          i18nKey="betterCalculatorInstallation"
          components={{
            Anchor: (
              <Anchor
                href="https://github.com/gbrissi/better_calculator/releases"
                target="_blank"
                rel="noreferrer"
              >
                Github Link
              </Anchor>
            ),
            Text: <Text>Text data</Text>,
          }}
        />
      }
      stack={[
        <MaterialDesignSVG className="w-8 h-8 fill-slate-950 dark:fill-slate-50" />,
        <FlutterSVG className="w-8 h-8 fill-slate-950 dark:fill-slate-50" />,
      ]}
    />
  );
}

function NewPagePlaceholder(props: { title: string }) {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <BackButton />
        <Heading size="8">{props.title}</Heading>
        <Text className="text-lg">Coming soon...</Text>
      </div>
    </Container>
  );
}

function ProjectView(props: ProjectViewProps) {
  const { t } = useTranslation(["translation"]);

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <BackButton />
        <div className="flex flex-row gap-4">
          <Heading size="8">{props.title}</Heading>
          <div className="flex flex-row gap-2 items-end">
            <Text className="text-sm font-light opacity-80">
              {t("projectPoweredBy")}
            </Text>
            <div className="flex flex-row gap-2">
              {props.stack.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-4 flex flex-col gap-4">
          {props.imageUrl != null && (
            <div className="w-full mt-2 mb-4">
              <img src={props.imageUrl} />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Text className="text-2xl font-medium">
              {t("projectDescription")}
            </Text>
            <Text className="text-lg">{props.description}</Text>
          </div>
          <div className="flex flex-col gap-2">
            <Text className="text-2xl font-medium">
              {t("projectInstallation")}
            </Text>
            <Text className="text-lg">{props.installation}</Text>
          </div>{" "}
        </div>
        <div className="flex flex-row gap-2">
          <Button asChild variant="outline" className="rounded-full w-min">
            <Anchor
              href={props.websitePreview}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-row gap-2 justify-center items-center">
                <FontAwesomeIcon icon={faEye} />
                <Text>{t("projectPreviewBtn")}</Text>
              </div>
            </Anchor>
          </Button>
          <Button asChild variant="secondary" className="rounded-full w-min">
            <Anchor href={props.sourceCodeUrl} target="_blank" rel="noreferrer">
              <div className="flex flex-row gap-2 justify-center items-center">
                <FontAwesomeIcon icon={faGitAlt} />
                <Text>{t("projectSourceCodeBtn")}</Text>
              </div>
            </Anchor>
          </Button>
        </div>
      </div>
    </Container>
  );
}
