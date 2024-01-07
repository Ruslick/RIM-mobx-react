import { FC, ReactNode, useEffect } from "react";
import { EntitiesStore } from "..";
import { Search } from "@/modules/search";
import { SimpleGrid } from "@mantine/core";
import { Skeletons } from "@/shared/ui/Skeletons";
import { Status } from "@/shared/constants/api";
import { NextPageLoader } from "@/shared/ui/NextPageLoader";
import { ScrollTopButton } from "@/shared/ui/ScrollTopButton";

export const TemplateEntitiesPage: FC<{
  store: EntitiesStore<unknown>;
  children: ReactNode;
}> = ({ store, children }) => {
  useEffect(() => {
    store.getEntities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Search store={store.searchStore} />
      <SimpleGrid cols={1}>
        {children}
        <Skeletons
          visible={store.api.status === Status.loading}
          count={20}
          w={"100%"}
          h={115}
        />
      </SimpleGrid>

      <NextPageLoader
        onIntersection={() => store.loadNextPage()}
        visible={store.api.status === "success"}
      />
      <ScrollTopButton />
    </>
  );
};
