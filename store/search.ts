import { atom, selector } from "recoil";

export interface SearchState {
  searchTerm: string;
  listCharacters: any[];
};

export const searchTerm = atom({
  key: "searchTerm",
  default: 'asdqweqwe',
});

