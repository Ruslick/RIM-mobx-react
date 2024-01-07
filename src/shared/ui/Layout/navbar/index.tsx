import { PATHS } from "@/shared/constants/pages";
import { AppShell, SegmentedControl, Stack, Title } from "@mantine/core";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navbarList = [
  { label: "Characters", value: PATHS.CHARACTERS },
  { label: "Locations", value: PATHS.LOCATIONS },
  { label: "Episodes", value: PATHS.EPISODES },
];

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <AppShell.Navbar bg={"dark.8"}>
      <Stack p={"md"}>
        <Title ta={"center"} order={2}>
          Navigation
        </Title>
        <SegmentedControl
          bg={"dark.6"}
          defaultValue={location.pathname}
          size="lg"
          data={navbarList}
          orientation="vertical"
          fullWidth
          onChange={(value) => navigate(value, { replace: true })}
        />
      </Stack>
    </AppShell.Navbar>
  );
};
