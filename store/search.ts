import { atom, selector } from "recoil";

import fetch from "@/config/api";

export const defaultValuesQuantity = [20, 40, 60, 80, 100];
export interface SearchState {
  searchTerm: string;
  listCharacters: any[];
};

export enum orderByEnum {
  "asc" = "name",
  "desc" =  "-name",
};

export const searchTerm = atom({
  key: "searchTerm",
  default: "",
});

export const searchOptions = atom({
  key: "searchOptions",
  default: {
    orderBySelected: orderByEnum.asc,
    qtySelected: defaultValuesQuantity[0],
  },
});

export const searchList = selector({
  key: "searchList",
  get: async ({ get }) => {
    const term = get(searchTerm);
    if(term !== "") {
      const response = await fetch(`characters`, "GET", {
        nameStartsWith: term,
      });
      return response.data;
    }
  },
});
