import { Flex, Heading } from "@chakra-ui/react";

type BadgeProps = {
  bg: string;
  children: React.ReactNode;
};

export function Badge({ bg, children }: Readonly<BadgeProps>) {
  return (
    <Flex justify={"center"} alignItems={"center"}>
      <Heading
        w={130}
        textAlign="center"
        size={"sm"}
        bg={bg}
        color="white"
        borderRadius={3}
        px={3}
        py={3}
      >
        {children}
      </Heading>
    </Flex>
  );
}
