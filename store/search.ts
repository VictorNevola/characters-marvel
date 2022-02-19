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

export const defaultValuesToSearch = {
  orderBy: orderByEnum.asc,
  limit: defaultValuesQuantity[0],
}

export const searchOptions = atom<ParamsOptions>({
  key: "searchOptions",
  default: {
    ...defaultValuesToSearch,
  },
});
