import { entityStores } from "@/modules/entity";
import { EpisodeProfile } from "@/shared/ui/Profiles/EpisodeProfile";
import { Loader } from "@mantine/core";
import { observer } from "mobx-react";
import { FC, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

export const EpisodePage: FC = observer(() => {
  const store = entityStores.episode;
  const id = useParams().id!;
  useEffect(() => {
    store.fetchGet(id);
  }, []);

  return store.data?.case({
    pending: () => <Loader />,
    rejected: () => <Navigate to={"/404"} />,
    fulfilled: (data) => <EpisodeProfile {...data} />,
  });
});
