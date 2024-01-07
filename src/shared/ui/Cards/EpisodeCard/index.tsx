import { PATHS } from "@/shared/constants/pages";
import { Episode } from "@/shared/types/episodeDTO";
import { Badge, Card, Group, Stack, Text, Title } from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";

export const EpisodeCard: FC<Episode> = (props) => {
  return (
    <Card shadow="sm" component={Link} to={PATHS.EPISODES + props.id}>
      <Stack gap={0}>
        <Group>
          <Text c={"dimmed"}>id: {props.id}</Text>
          <Badge size="sm"> {props.episode}</Badge>
        </Group>
        <Title order={2}>{props.name}</Title>
      </Stack>
    </Card>
  );
};
