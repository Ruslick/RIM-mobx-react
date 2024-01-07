import { SearchStore } from "@/modules/search/Store/store";
import { API, Status } from "@/shared/constants/api";
import { Api } from "@/shared/libs/api";
import { ejectId } from "@/shared/libs/eject-id";
import { PaginatedData } from "@/shared/types/api";
import { makeAutoObservable, runInAction, toJS } from "mobx";

export class EntitiesStore<T> {
  data?: T[];
  api: Api<PaginatedData<T>>;
  searchStore: SearchStore;

  constructor(urlApi: API, searchParams: string[]) {
    makeAutoObservable(this);
    this.api = new Api(urlApi);
    this.searchStore = new SearchStore(this, searchParams);
  }

  async getEntities(params?: URLSearchParams) {
    if (this.api.status !== Status.idle) return;
    await this.api.fetch({ params });
    runInAction(() => {
      this.data = this.api.data?.results;
    });
  }

  async reGetEntities(params?: URLSearchParams) {
    this.api.reset();
    this.getEntities(params);
  }

  async loadNextPage() {
    const nextPage = ejectId(this.api?.data?.info?.next);

    if (this.api.status !== Status.success || !nextPage) return;

    await this.api.fetch({
      params: new URLSearchParams({ page: nextPage }),
    });
    runInAction(() => {
      console.log(toJS(this.api.data?.results));
      this.data = [...(this.data || []), ...(this.api.data?.results || [])];
    });
  }
}
