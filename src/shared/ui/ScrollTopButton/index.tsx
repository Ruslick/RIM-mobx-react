import { ActionIcon } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import { IconArrowUp } from "@tabler/icons-react";

import s from "./index.module.scss";

export const ScrollTopButton: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <ActionIcon
      bg={"dark.4"}
      className={s.scrollTopButton}
      size={"xl"}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <IconArrowUp />
    </ActionIcon>
  );
};
