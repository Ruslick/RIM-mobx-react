import { EntitiesStore } from "@/modules/entities";
import { makeAutoObservable, reaction } from "mobx";

export class SearchStore {
  rootStore: EntitiesStore<unknown>;
  paramsArray: string[];
  paramsObject: Record<string, string> = {};
  get urlParams() {
    return new URLSearchParams(this.paramsObject);
  }

  constructor(rootStore: EntitiesStore<unknown>, initParamsArray: string[]) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.paramsArray = initParamsArray;
    this.initParamsObject();

    reaction(
      () => this.urlParams,
      () => {
        this.rootStore.reGetEntities(this.urlParams);
      },
      { delay: 1000 }
    );
  }
  initParamsObject() {
    const params: Record<string, string> = {};

    this.paramsArray.forEach((param) => {
      params[param] = "";
    });

    this.paramsObject = params;
  }
  resetParams = () => {
    this.initParamsObject();
  };
  setParam = (key: string, value: string) => {
    this.paramsObject[key] = value;
  };

  resetParam = (key: string) => {
    this.paramsObject[key] = "";
  };
}
