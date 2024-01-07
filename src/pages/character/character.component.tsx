import { entityStores } from "@/modules/entity";
import { CharacterProfile } from "@/shared/ui/Profiles/CharacterProfile";
import { Loader } from "@mantine/core";
import { observer } from "mobx-react";
import { FC, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

export const CharacterPage: FC = observer(() => {
  const store = entityStores.character;
  const id = useParams().id!;
  useEffect(() => {
    store.fetchGet(id);
  }, []);
  
  return store.data?.case({
    pending: () => <Loader />,
    rejected: () => <Navigate to={"/404"} />,
    fulfilled: (data) => <CharacterProfile {...data} />,
  });
});
