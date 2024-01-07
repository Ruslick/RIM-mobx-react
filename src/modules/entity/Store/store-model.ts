import { API } from "@/shared/constants/api";
import { fetchOne } from "@/shared/libs/fetch";
import { makeAutoObservable } from "mobx";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";

export class EntityStore<T extends { id: number }> {
  data?: IPromiseBasedObservable<T>;
  private urlApi: API;

  constructor(urlApi: API) {
    makeAutoObservable(this);
    this.urlApi = urlApi;
  }

  async fetchGet(id: string) {
    if (this.data?.state === "pending") return;

    const dataId = (this.data?.value as T)?.id.toString();

    if (dataId === id) return;

    this.data = fromPromise(fetchOne<T>(this.urlApi, id));
  }
}
