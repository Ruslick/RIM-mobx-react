import axios from "axios";
import { API } from "../constants/api";

type Fetch = {
  url: API;
  params?: URLSearchParams;
  id?: string;
};

export const fetch = async <T>({ url, params, id }: Fetch) => {
  const response = await axios<T>(url + (id ? id : ""), {
    params,
  });
  return response.data;
};
