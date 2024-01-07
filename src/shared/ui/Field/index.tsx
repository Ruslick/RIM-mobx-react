import { PATHS } from "@/shared/constants/pages";
import { Anchor, Divider, Stack, Text } from "@mantine/core";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import s from "./index.module.scss";

interface FieldProps {
  text?: string | ReactNode;
  path?: PATHS;
  id?: string;
  label: string;
  children?: ReactNode;
}

export const Field: FC<FieldProps> = ({ text, path, label, id, children }) => {
  const link = path && id ? path + id : "";

  const linkComponent = (
    <Anchor className={s.link} component={Link} to={link}>
      {text}
    </Anchor>
  );
  const textComponent = text && <Text c={"white"}> {text}</Text>;

  return (
    <Stack gap={0}>
      <Text c={"dimmed"}>{label}</Text>
      {link ? linkComponent : textComponent}
      {children}
      <Divider />
    </Stack>
  );
};
