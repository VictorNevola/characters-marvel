import { atom, selector } from "recoil";

import fetch from "@/config/api";
export interface SearchState {
  searchTerm: string;
  listCharacters: any[];
}

export const searchTerm = atom({
  key: "searchTerm",
  default: "",
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
