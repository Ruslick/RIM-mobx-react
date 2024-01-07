import { Search } from "@/modules/search";
import { NextPageLoader } from "@/shared/ui/NextPageLoader";
import { ScrollTopButton } from "@/shared/ui/ScrollTopButton";
import { Skeletons } from "@/shared/ui/Skeletons";
import { SimpleGrid, Title } from "@mantine/core";
import { FC, ReactNode, useEffect } from "react";
import { EntitiesStore } from "..";

interface TemplateEntitiesPageProps {
  store: EntitiesStore<unknown>;
  children: ReactNode;
}

export const TemplateEntitiesPage: FC<TemplateEntitiesPageProps> = ({
  store,
  children,
}) => {
  useEffect(() => {
    store.getEntities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isEmptyCollection = store.collection.length === 0;
  const isDataPending = store.data?.state === "pending";

  const emptyCollectionAlert = isEmptyCollection && !isDataPending && (
    <Title>No results</Title>
  );

  return (
    <>
      <Search store={store.searchStore} />
      <SimpleGrid cols={1}>
        {children}
        {emptyCollectionAlert}
        <Skeletons
          visible={store.data?.state === "pending"}
          count={20}
          w={"100%"}
          h={115}
        />
      </SimpleGrid>

      <NextPageLoader onIntersection={() => store.loadNextPage()} />
      <ScrollTopButton />
    </>
  );
};
