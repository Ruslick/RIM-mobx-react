import { PATHS } from "@/shared/constants/pages";
import { ejectId } from "@/shared/libs/eject-id";
import { Episode } from "@/shared/types/episodeDTO";
import { Badge, Group, Paper, Stack, Title } from "@mantine/core";
import { FC } from "react";
import { Field } from "../../Field";

export const EpisodeProfile: FC<Episode> = (props) => {
  const characters = props.characters.map((url) => (
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
          <Title order={1}>{props.name}</Title>
          <Badge size="lg">{props.episode}</Badge>
        </Group>
        <Title order={4}>Air Date: {props.air_date}</Title>
      </Paper>
      <Paper>
        <Title order={1}>List of characters</Title>
        <Stack>{characters}</Stack>
      </Paper>
    </Stack>
  );
};
