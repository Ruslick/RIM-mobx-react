import { AppShell, Container, Stack } from "@mantine/core";
import { FC, ReactNode } from "react";

export const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AppShell.Main>
      <Container size={"xl"}>
        <Stack py={"md"}>{children}</Stack>
      </Container>
    </AppShell.Main>
  );
};
