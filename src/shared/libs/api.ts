import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { API, Status } from "../constants/api";

export class Api<Data> {
  status: Status = Status.idle;
  data?: Data;
  constructor(public url: API) {
    makeAutoObservable(this);
  }

  reset: () => void = () => {
    this.data = undefined;
    this.status = Status.idle;
  };

  fetch = async ({ params, id }: { params?: URLSearchParams; id?: string }) => {
    const preparedUrl = id ? this.url + id : this.url;

    try {
      this.status = Status.loading;
      const result = await axios<Data>(preparedUrl, {
        params,
      });
      runInAction(() => {
        this.data = result.data;
        this.status = Status.success;
      });
      return result;
    } catch (e) {
      this.status = Status.failed;
      return e;
    }
  };
}
