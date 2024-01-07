import { Badge, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { observer } from "mobx-react";
import { FC, useEffect } from "react";
import { SearchStore } from "../Store/store";
import { toJS } from "mobx";

export const Search: FC<{ store: SearchStore }> = observer(({ store }) => {
  const [filter, setFilter] = useInputState(store.paramsArray[0]);
  const [searchedValue, setSearchedValue] = useInputState("");

  useEffect(() => {
    store.setParam(filter, searchedValue);
  }, [filter, searchedValue]);

  const badges = Object.entries(store.paramsObject).map(([key, value]) => {
    return (
      value && (
        <Badge
          key={key}
          onClick={() => {
            store.resetParam(key);
            setSearchedValue(store.paramsObject[filter]);
          }}
        >
          {key}: {value}
        </Badge>
      )
    );
  });

  return (
    <Paper bg={"dark.6"} shadow="md" p="md">
      <Stack>
        <Group wrap="nowrap">
          <TextInput
            size="md"
            w={"100%"}
            placeholder="Search..."
            value={searchedValue}
            onChange={(e) => {
              setSearchedValue(e.target.value);
            }}
          />
          <Select
            size="md"
            data={store.paramsArray}
            value={filter}
            onChange={(value) => {
              setFilter(value);
              if (value) {
                console.log(toJS(store.paramsObject));
                setSearchedValue(store.paramsObject[value]);
              }
            }}
          />
        </Group>
        <Group h={16}>{badges}</Group>
      </Stack>
    </Paper>
  );
});
