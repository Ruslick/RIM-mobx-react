import { PATHS } from "@/shared/constants/pages";
import { Location } from "@/shared/types/locationDTO";
import { Card, Group, Stack, Text, Title } from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";

export const LocationCard: FC<Location> = (props) => {
  return (
    <Card shadow="sm" component={Link} to={PATHS.LOCATIONS + props.id}>
      <Stack gap={0}>
        <Group>
          <Text c={"dimmed"}>id: {props.id}</Text>
        </Group>
        <Title order={2}>{props.name}</Title>
      </Stack>
    </Card>
  );
};
