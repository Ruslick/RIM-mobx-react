import { entityStores } from "@/modules/entity";
import { LocationProfile } from "@/shared/ui/Profiles/LocationProfile";
import { Loader } from "@mantine/core";
import { observer } from "mobx-react";
import { FC, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

export const LocationPage: FC = observer(() => {
  const store = entityStores.location;
  const id = useParams().id!;
  useEffect(() => {
    store.fetchGet(id);
  }, []);

  return store.data?.case({
    pending: () => <Loader />,
    rejected: () => <Navigate to={"/404"} />,
    fulfilled: (data) => <LocationProfile {...data} />,
  });
});
