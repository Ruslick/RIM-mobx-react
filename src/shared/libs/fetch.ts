import axios from "axios";
import { PaginatedData } from "../types/api";
import { API } from "../constants/api";

export const fetchMany = async <T>(api: API, params?: URLSearchParams) => {
  const response = await axios<PaginatedData<T>>(api, {
    params,
  });
  return response.data;
};

export const fetchOne = async <T>(api: API, id: string) => {
  const response = await axios<T>(api + id);
  return response.data;
};
