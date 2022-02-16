import { atom, selector } from "recoil";

export interface SearchState {
  searchTerm: string;
  listCharacters: any[];
}

export const searchState = atom({
  key: "search",
  default: {} as SearchState,
});