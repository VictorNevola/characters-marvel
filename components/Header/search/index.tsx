import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SearchBarWrapper, IconSearch, InputSearch } from "./styles";

import { searchState } from "@/store/search";
import fetch from "@/config/api";

const SearchBar = () => {
  const [search, setSearch] = useRecoilState(searchState);

  const handlerSearch = useCallback(async (termValue) => {
    if (termValue.length > 0) {
      const response = await fetch(`characters`, "GET", {
        nameStartsWith: termValue,
      });

      setSearch({
        searchTerm: termValue,
        listCharacters: [response.data],
      });
    }

    setSearch({
      searchTerm: "",
      listCharacters: [],
    });

  }, [setSearch]);  

  console.log("search", search);

  return (
    <SearchBarWrapper>
      <InputSearch
        minLength={4}
        debounceTimeout={500}
        placeholder="Busque pelo seu herói"
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
          handlerSearch(value)
        }
      />
      <IconSearch height={22} width={22} color="#000000" />
    </SearchBarWrapper>
  );
};

export default SearchBar;
