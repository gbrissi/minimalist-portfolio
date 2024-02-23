import { Card, Heading, Text } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
export default function ProjectsSection() {
  const { t } = useTranslation(["translation"]);
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 flex-col">
      <Heading as="h2">{t("projectSectionLabel")}</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Project
          title={t("calculatorProjectTitle")}
          createdAt={t("calculatorProjectCreatedAt")}
          description={t("calculatorProjectDescription")}
          stack={["Flutter", "Material"]}
          onClick={() => navigate("/projects/better_calculator")}
        />
        <Project
          title={t("clip2GifProjectTitle")}
          createdAt={t("clip2GifProjectCreatedAt")}
          description={t("clip2GifProjectDescription")}
          stack={["Flutter", "Material"]}
          onClick={() => navigate("/projects/easy_clip_2_gif")}
        />
        <Project
          title={t("freeduProjectTitle")}
          createdAt={t("freeduProjectCreatedAt")}
          description={t("freeduProjectDescription")}
          onClick={() => navigate("/projects/freedu")}
          stack={[
            "Flutter",
            "Material",
            "Express.js",
            "PostgreSQL",
            "PrismaORM",
            "Passport.js",
          ]}
        />
        <Project
          title={t("clipProjectTitle")}
          createdAt={t("clipProjectCreatedAt")}
          description={t("clipProjectDescription")}
          onClick={() => navigate("/projects/easy_2_clip")}
          stack={["Flutter", "Material"]}
        />
      </div>
    </div>
  );
}

interface ProjectProps {
  title: string;
  createdAt: string;
  stack: string[];
  onClick?: () => void;
  description: string;
}

function Project(props: ProjectProps) {
  const { t } = useTranslation(["translation"]);

  return (
    <Card
      onClick={props.onClick}
      className="p-0 m-0 flex cursor-pointer transition-colors dark:hover:bg-slate-900 hover:bg-slate-100"
    >
      <div className="flex bg-slate-50 dark:bg-slate-950 justify-center items-center w-full h-64 mb-4">
        {/* <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> */}
        <Text className="text-light text-sm opacity-80">{t("noPreview")}</Text>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <Text className="font-bold text-2xl">{props.title}</Text> <br />
          <Text className="font-light opacity-80">
            {props.stack.join(", ")}
          </Text>
        </div>
        <div className="mb-4">
          <Text className="font-light text-lg">{props.description}</Text>
        </div>
        <div className="flex justify-start items-end">
          <Text className="font-light text-sm opacity-80 text-end">
            {`${t("developedIn")} ${props.createdAt}`}
          </Text>
        </div>
      </div>
    </Card>
  );
}
