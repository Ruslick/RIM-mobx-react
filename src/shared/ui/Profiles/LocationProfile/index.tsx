import { PATHS } from "@/shared/constants/pages";
import { ejectId } from "@/shared/libs/eject-id";
import { Location } from "@/shared/types/locationDTO";
import { Anchor, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { FC } from "react";
import { Field } from "../../Field";
import React from "react";

export const LocationProfile: FC<Location> = (props) => {
  const characters = props.residents.map((url) => (
    <React.Fragment key={url}>
      <Anchor href={PATHS.CHARACTERS + ejectId(url)}>{ejectId(url)},</Anchor>{" "}
    </React.Fragment>
  ));

  return (
    <Stack>
      <Paper>
        <Group>
          <Title order={2}>{props.name}</Title>
        </Group>
      </Paper>
      <Paper>
        <Stack>
          <Field text={props.id} label={"Id"} />
          <Field text={props.dimension} label={"Dimension:"} />
          <Field text={props.type} label={"Type:"} />
          <Field label={"List of residents:"}>
            <Text>{characters}</Text>
          </Field>
        </Stack>
      </Paper>
    </Stack>
  );
};
