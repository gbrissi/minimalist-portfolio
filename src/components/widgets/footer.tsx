import { Text, Container } from "@radix-ui/themes";

export default function Footer() {
  return (
    <Container className="opacity-50 grow-0 py-4 ">
      <div className="flex justify-center lg:justify-start mt-12 align-center">
        <Text className="font-light" size="2">
          Spring, 2024 — Gabriel Rissi.
        </Text>
      </div>
    </Container>
  );
}
