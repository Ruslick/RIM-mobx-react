import { AppShell, Container, Group, Title } from "@mantine/core";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <AppShell.Header bg={"dark.8"}>
      <Container size={"xl"} h={"100%"}>
        <Group h={"100%"} justify="space-between">
          <Title>Rick and Morty app</Title>
        </Group>
      </Container>
    </AppShell.Header>
  );
};
