import { entitiesStores } from "@/modules/entities";
import { TemplateEntitiesPage } from "@/modules/entities/ui/template-entities-page";
import { LocationCard } from "@/shared/ui/Cards/LocationCard";
import { observer } from "mobx-react";
import { FC } from "react";

export const LocationsPage: FC = observer(() => {
  const locationsStore = entitiesStores.locations;

  const cards = locationsStore.collection.map((location) => {
    return <LocationCard key={location.id} {...location} />;
  });

  return (
    <TemplateEntitiesPage store={locationsStore}>{cards}</TemplateEntitiesPage>
  );
});
