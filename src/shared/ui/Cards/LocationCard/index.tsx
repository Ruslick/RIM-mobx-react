import { Location } from "@/shared/types/locationDTO";
import { Badge, Card, Group, Stack, Title } from "@mantine/core";
import { IconCalendar, IconEye } from "@tabler/icons-react";
import { FC } from "react";

export const LocationCard: FC<Location> = (props) => {
  return (
    <Card shadow="sm">
      <Stack>
        <Title order={4}>{props.name}</Title>
        <Group>
          <Badge bg={"dark.4"} leftSection={<IconCalendar size={15} />}>
            {props.dimension}
          </Badge>
          <Badge bg={"dark.4"} leftSection={<IconEye size={15} />}>
            {props.type}
          </Badge>
        </Group>
      </Stack>
    </Card>
  );
};
