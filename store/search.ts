import { atom, selector } from "recoil";

import fetch from "@/config/api";
import { ApiMarvel } from "interfaces/apiMarvel";

export const defaultValuesQuantity = [20, 40, 60, 80, 100];

export interface ParamsOptions {
  orderBy: string;
  limit: number;
  nameStartsWith?: string;
}

export enum orderByEnum {
  "asc" = "name",
  "desc" =  "-name",
};

export const searchOptions = atom<ParamsOptions>({
  key: "searchOptions",
  default: {
    orderBy: orderByEnum.asc,
    limit: defaultValuesQuantity[0]
  },
});

export const customSearchCharacters = selector({
  key: "customSearchCharacters",
  get: async ({ get }) => {
    const options = get(searchOptions);

    const params: ParamsOptions = {
      ...options
    };

    if(options.nameStartsWith === "") delete params.nameStartsWith;

    const response = await fetch<ApiMarvel>("/characters", "GET", params);

    return response.data;

  }
});
