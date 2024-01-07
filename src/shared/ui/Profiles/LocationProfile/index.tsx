import { PATHS } from "@/shared/constants/pages";
import { ejectId } from "@/shared/libs/eject-id";
import { Location } from "@/shared/types/locationDTO";
import { Badge, Group, Paper, Stack, Title } from "@mantine/core";
import { FC } from "react";
import { Field } from "../../Field";

export const LocationProfile: FC<Location> = (props) => {
  const characters = props.residents.map((url) => (
    <Field
      key={url}
      text={"Link"}
      label={"Character id: " + ejectId(url)}
      path={PATHS.CHARACTERS}
      id={ejectId(url)}
    />
  ));

  return (
    <Stack>
      <Paper>
        <Group>
          <Title order={2}>{props.name}</Title>
          <Badge size="md">{props.dimension}</Badge>
          <Badge size="md">{props.type}</Badge>
        </Group>
      </Paper>
      <Paper>
        <Title order={2}>List of residents</Title>
        <Stack>{characters}</Stack>
      </Paper>
    </Stack>
  );
};
