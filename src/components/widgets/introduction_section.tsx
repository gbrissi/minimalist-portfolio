import { Container, Heading, Text, Flex, Link } from "@radix-ui/themes";
import TextGradient from "./text_gradient";
import {
  IconDefinition,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ContactForm from "./contact_form";
import { Trans, useTranslation } from "react-i18next";

export default function IntroductionSection() {
  const { t } = useTranslation(["translation"]);

  return (
    <div className="flex flex-col gap-3 mt-12 mb-24">
      <Heading size="8">
        <Trans
        t={t}
          i18nKey="intro"
          components={{
            Gradient: <TextGradient>TextData</TextGradient>,
          }}
        />
        .
      </Heading>
      <Container>
        <Text size="5" className="font-light">
          {t("descriptionStart")} <StackName>Next.js</StackName>,{" "}
          <StackName>Flutter</StackName>, <StackName>React</StackName>{" "}
          {t("descriptionEnd")}!
          <br />
          {t("job")}
        </Text>
      </Container>
      <Flex className="gap-2 mt-2" direction="row" align="start">
        <SocialMediaIcon icon={faGithub} href="https://github.com/gbrissi" />
        <SocialMediaIcon
          icon={faLinkedin}
          href="https://www.linkedin.com/in/gabriel-rissi/"
        />
        <ContactMe />
      </Flex>
    </div>
  );
}

function StackName(props: { children: string }) {
  return <span className="font-medium">{props.children}</span>;
}

function ContactMe() {
  const { t } = useTranslation(["translation"]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="ms-2 rounded-full">
          <Flex
            gap="2"
            justify="center"
            align="center"
            className="opacity-80 hover:opacity-100"
          >
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
            <Text>{t("contactMe")}</Text>
          </Flex>
        </Button>
      </DialogTrigger>
      {/* TODO: Dialog Content text color is not changing from black to white when the theme is dark, hardcode was needed*/}
      <DialogContent className="dark:text-slate-50 text-slate-900">
        <DialogHeader>
          <DialogTitle>{t("contactMe")}</DialogTitle>
          <DialogDescription>{t("contactDialogDescription")}</DialogDescription>
          <Flex className="gap-2 mt-2" direction="row" align="start">
            <SmallSocialMediaIcon
              icon={faGithub}
              href="https://github.com/gbrissi"
            />
            <SmallSocialMediaIcon
              icon={faLinkedin}
              href="https://www.linkedin.com/in/gabriel-rissi"
            />
          </Flex>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}

// TODO: asChild prop is removing the outlined from the button and I haven't found a good solution yet
function SocialMediaIcon(props: { icon: IconDefinition; href: string }) {
  return (
    <Button variant="outline" className="rounded-full w-12 h-12">
      <Link
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className="opacity-80 hover:opacity-100 dark:text-slate-50 text-slate-900"
      >
        <FontAwesomeIcon icon={props.icon} size="2x" />
      </Link>
    </Button>
  );
}

function SmallSocialMediaIcon(props: { icon: IconDefinition; href: string }) {
  const urlRedirect: string = props.href.split("/").pop()!;

  return (
    <Button variant="outline" className="rounded-full">
      <Link
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer opacity-80 hover:opacity-100 dark:text-slate-50 text-slate-900"
      >
        <Flex justify="center" align="center">
          <FontAwesomeIcon icon={props.icon} size="lg" />
          <Text className="ms-2">/{urlRedirect}</Text>
        </Flex>
      </Link>
    </Button>
  );
}
