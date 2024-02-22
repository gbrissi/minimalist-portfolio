import { Text } from "@radix-ui/themes";

interface TextGradientProps {
  className?: string;
  children: string;
}

export default function TextGradient(props: TextGradientProps) {
  return (
    <Text
      className={`font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient ${props.className}`}
    >
      {props.children}
    </Text>
  );
}
