import { entitiesStores } from "@/modules/entities";
import { TemplateEntitiesPage } from "@/modules/entities/ui/template-entities-page";
import { EpisodeCard } from "@/shared/ui/Cards/EpisodeCard";
import { observer } from "mobx-react";
import { FC } from "react";

export const EpisodesPage: FC = observer(() => {
  const episodesStore = entitiesStores.episodes;
  const cards = episodesStore.data?.map((episode) => {
    return <EpisodeCard key={episode.id} {...episode} />;
  });

  return (
    <TemplateEntitiesPage store={episodesStore}>{cards}</TemplateEntitiesPage>
  );
});
