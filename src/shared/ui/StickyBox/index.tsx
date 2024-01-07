import { Box } from "@mantine/core";
import { FC, ReactNode } from "react";
import styles from "./index.module.scss";

interface StickyBoxProps {
  children: ReactNode;
  bottom?: boolean;
}

export const StickyBox: FC<StickyBoxProps> = ({ children, bottom = false }) => {
  return (
    <Box className={styles.sticky} data-bottom={bottom}>
      {children}
    </Box>
  );
};
