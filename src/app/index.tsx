import { theme } from "@/shared/global-styles/theme";
import { MantineProvider } from "@mantine/core";
import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const App: FC = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  );
};
