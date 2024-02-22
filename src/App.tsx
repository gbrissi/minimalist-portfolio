import Appbar from "./components/widgets/app_bar";
import Footer from "./components/widgets/footer";
import IntroductionSection from "./components/widgets/introduction_section";
import { Container, Flex } from "@radix-ui/themes";
import ProjectsSection from "./components/widgets/projects_section";

export default function App() {
  return (
    <Flex direction="column" className="min-h-screen px-8 xl:px-4">
      <Appbar />
      <Container>
        <IntroductionSection />
        <ProjectsSection/>
      </Container>
      <Footer />
    </Flex>
  );
}
