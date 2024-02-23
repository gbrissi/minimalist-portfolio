import { Text, Container } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation(["translation"]);

  return (
    <Container className="opacity-50 grow-0 py-4 ">
      <div className="flex justify-center lg:justify-start mt-12 align-center">
        <Text className="font-light" size="2">
          {t("footer")}
        </Text>
      </div>
    </Container>
  );
}
