import { PATHS } from "@/shared/constants/pages";
import { ejectId } from "@/shared/libs/eject-id";
import { Episode } from "@/shared/types/episodeDTO";
import { Anchor, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { FC } from "react";
import { Field } from "../../Field";
import React from "react";

export const EpisodeProfile: FC<Episode> = (props) => {
  const characters = props.characters.map((url) => (
    <React.Fragment key={url}>
      <Anchor href={PATHS.CHARACTERS + ejectId(url)}>{ejectId(url)},</Anchor>{" "}
    </React.Fragment>
  ));

  return (
    <Stack>
      <Paper>
        <Group>
          <Title order={1}>{props.name}</Title>
        </Group>
      </Paper>
      <Paper>
        <Stack>
          <Field text={props.id} label={"Id"} />
          <Field text={props.episode} label={"Episode:"} />
          <Field text={props.air_date} label={"Air Date:"} />
          <Field label={"List of residents:"}>
            <Text>{characters}</Text>
          </Field>
        </Stack>
      </Paper>
    </Stack>
  );
};
