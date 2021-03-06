import { atom, selector } from "recoil";

export const defaultValuesQuantity = [20, 40, 60, 80, 100];
export interface ParamsOptions {
  orderBy: string;
  limit: number;
  nameStartsWith?: string;
  offset?: number;
}

export enum orderByEnum {
  "asc" = "name",
  "desc" = "-name",
}

export const defaultValuesToSearch = {
  orderBy: orderByEnum.asc,
  limit: defaultValuesQuantity[0],
  offset: 0,
};

export const searchOptions = atom<ParamsOptions>({
  key: "searchOptions",
  default: {
    ...defaultValuesToSearch,
  },
});
