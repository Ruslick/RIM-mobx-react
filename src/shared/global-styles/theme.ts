import { Paper, createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "green",
  fontFamily: "Poppins, sans-serif",
  headings: {
    fontFamily: "Poppins, sans-serif",
  },
  components: {
    Paper: Paper.extend({
      defaultProps: {
        shadow: "md",
        p: "md",
        radius: "md",
        bg: "dark.6",
        h: "100%",
      },
    }),
  },
});
