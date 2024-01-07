import { entitiesStores } from "@/modules/entities";
import { TemplateEntitiesPage } from "@/modules/entities/ui/template-entities-page";
import { CharacterCard } from "@/shared/ui/Cards/CharacterCard";
import { observer } from "mobx-react";
import { FC } from "react";

export const CharactersPage: FC = observer(() => {
  const charsStore = entitiesStores.characters;
  const cards = charsStore.data?.map((character) => {
    return <CharacterCard key={character.id} {...character} />;
  });

  return (
    <TemplateEntitiesPage store={charsStore}>{cards}</TemplateEntitiesPage>
  );
});
