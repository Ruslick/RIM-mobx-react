import { SearchStore } from "@/modules/search/Store/store";
import { API } from "@/shared/constants/api";
import { fetch } from "@/shared/libs/api";
import { ejectId } from "@/shared/libs/eject-id";
import { PaginatedData } from "@/shared/types/api";
import {
  makeAutoObservable,
  reaction,
  when
} from "mobx";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";

export class EntitiesStore<T> {
  collection: T[] = [];
  searchStore: SearchStore;
  data?: IPromiseBasedObservable<PaginatedData<T[]>>;

  constructor(private readonly urlApi: API, searchParams: string[]) {
    makeAutoObservable(this);
    this.searchStore = new SearchStore(this, searchParams);

    reaction(
      () => this.data?.state === "rejected",
      () => {
        this.collection = [];
      }
    );
  }

  async getEntities(params?: URLSearchParams) {
    if (this.data?.state === "pending") return;

    this.data = fromPromise(
      fetch<PaginatedData<T[]>>({ url: this.urlApi, params })
    );
    when(
      () => this.data?.state !== "pending",
      () => {
        this.data?.case({
          fulfilled: (data) => {
            this.collection = data.results;
          },
        });
      }
    );
  }

  async loadNextPage() {
    const nextPage = ejectId(
      (this.data?.value as PaginatedData<T[]>)?.info?.next
    );

    if (this.data?.state !== "fulfilled" || !nextPage) return;

    const params = this.searchStore.urlParams;

    params.set("page", nextPage);

    this.data = fromPromise(
      fetch<PaginatedData<T[]>>({
        url: this.urlApi,
        params,
      })
    );

    when(
      () => this.data?.state !== "pending",
      () => {
        this.data?.case({
          fulfilled: (data) => {
            this.collection.push(...data.results);
          },
        });
      }
    );
  }
}
