import { PATHS } from "@/shared/constants/pages";
import { ejectId } from "@/shared/libs/eject-id";
import { Character } from "@/shared/types/characterDTO";
import { Field } from "@/shared/ui/Field";
import { Box, Grid, Image, Paper, Stack, Title } from "@mantine/core";
import { FC } from "react";

export const CharacterProfile: FC<Character> = (props) => {
  return (
    <Grid>
      <Grid.Col span={4}>
        <Paper>
          <Image src={props.image} />
        </Paper>
      </Grid.Col>
      <Grid.Col span={8}>
        <Stack h={"100%"}>
          <Paper>
            <Title order={1}>{props.name}</Title>
          </Paper>
          <Paper>
            <Stack>
              <Field text={props.status} label={"Status"} />
              <Field text={props.species} label={"Species"} />
              <Field text={props.gender} label={"Gender"} />

              <Field
                text={props.origin.name}
                path={PATHS.LOCATIONS}
                id={ejectId(props.origin.url)}
                label={"First seen in:"}
              />
              <Field
                text={props.location.name}
                path={PATHS.LOCATIONS}
                id={ejectId(props.location.url)}
                label={"Last known location:"}
              />
            </Stack>
          </Paper>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
