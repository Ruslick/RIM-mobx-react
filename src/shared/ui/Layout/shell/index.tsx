import { AppShell } from "@mantine/core";
import { Header } from "../header";
import { Navbar } from "../navbar";
import { Main } from "../main";
import { Outlet } from "react-router-dom";
import { FC } from "react";

history.scrollRestoration = "manual";
export const Shell: FC = () => {
  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      bg={"dark.7"}
      navbar={{
        collapsed: { desktop: false, mobile: true },
        width: 300,
        breakpoint: "md",
      }}
    >
      <Header />
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </AppShell>
  );
};
