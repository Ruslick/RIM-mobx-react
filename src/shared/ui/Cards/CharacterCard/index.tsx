import { Character } from "@/shared/types/characterDTO";
import { Avatar, Card, Group, Indicator, Title, Tooltip } from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";

const indicatorColorsRules = {
  Alive: "green",
  Dead: "red",
  unknown: "dark.3",
};

export const CharacterCard: FC<Character> = (props) => {
  return (
    <Card component={Link} to={`/characters/${props.id}`}>
      <Group wrap="nowrap">
        <Avatar src={props.image} size={"xl"} />
        <Title order={3}>{props.name}</Title>
        <Tooltip label={props.status} offset={10} withArrow>
          <Indicator
            color={indicatorColorsRules[props.status]}
            size={13}
            zIndex={0}
          />
        </Tooltip>
      </Group>
    </Card>
  );
};
