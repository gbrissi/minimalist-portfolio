import { ReloadIcon } from "@radix-ui/react-icons";
import { Card, Grid, Heading, Text } from "@radix-ui/themes";

export default function ProjectsSection() {
  return (
    <div className="flex gap-4 flex-col">
      <Heading as="h2">Personal Projects</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Project
          title="BetterCalculator"
          createdAt="Spring 2024"
          description="A customizable calculator desktop app built to resolve simple mathematical arithmetical expressions that programmers often face on development."
          stack={["Flutter", "Material"]}
        />
        <Project
          title="EasyClip2Gif"
          createdAt="Spring 2024"
          description="Trim your video, convert it to a GIF image with your preferred settings and store it locally or share it with the web."
          stack={["Flutter", "Material"]}
        />
        <Project
          title="Freedu"
          createdAt="Winter 2023"
          description="A collaborative question and answer application focused on Brazilian educational teaching from elementary to high school levels."
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
          title="Easy2Clip"
          createdAt="Spring 2024"
          description="Trim your video and store it locally."
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
  description: string;
}

function Project(props: ProjectProps) {
  function openProject() {}

  return (
    <Card
      onClick={openProject}
      className="p-0 m-0 flex cursor-pointer transition-colors dark:hover:bg-slate-900 hover:bg-slate-100"
    >
      <div className="flex bg-slate-50 dark:bg-slate-950 justify-center items-center w-full h-64 mb-4">
        {/* <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> */}
        <Text className="text-light text-sm opacity-80">No preview.</Text>
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
            Developed in {props.createdAt}
          </Text>
        </div>
      </div>
    </Card>
  );
}
