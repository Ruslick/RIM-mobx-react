import { AppShell, Container, Group, Text, Title } from "@mantine/core";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <AppShell.Footer bg={"dark.8"}>
      <Container size={"xl"} h={"100%"}>
        <Group h={"100%"} justify="space-between">
          <Title order={3}>Rick and Morty app</Title>
          <Text>2022</Text>
        </Group>
      </Container>
    </AppShell.Footer>
  );
};
