import { Episode } from "@/shared/types/episodeDTO";
import { Badge, Card, Group, Stack, Title } from "@mantine/core";
import { IconCalendar, IconEye } from "@tabler/icons-react";
import { FC } from "react";

export const EpisodeCard: FC<Episode> = (props) => {
  return (
    <Card shadow="sm">
      <Stack>
        <Title order={4}>{props.name}</Title>
        <Group>
          <Badge bg={"dark.4"} leftSection={<IconCalendar size={15} />}>
            {props.air_date}
          </Badge>
          <Badge bg={"dark.4"} leftSection={<IconEye size={15} />}>
            {props.episode}
          </Badge>
        </Group>
      </Stack>
    </Card>
  );
};
