import { API } from "@/shared/constants/api";
import { fetchOne } from "@/shared/libs/fetch";
import { autorun, makeAutoObservable, toJS } from "mobx";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";

export class EntityStore<T> {
  data?: IPromiseBasedObservable<T>;
  private urlApi: API;

  constructor(urlApi: API) {
    makeAutoObservable(this);
    this.urlApi = urlApi;

    autorun(() => {
      console.log(toJS(this.data));
    });
  }

  async fetchGet(id: string) {
    if (this.data?.state) return;
    this.data = fromPromise(fetchOne<T>(this.urlApi, id));
  }
}
