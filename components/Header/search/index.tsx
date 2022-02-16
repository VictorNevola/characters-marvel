import { ChangeEvent } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { SearchBarWrapper, IconSearch, IconX, InputSearch } from "./styles";

import { searchList, searchTerm } from "@/store/search";

const SearchBar = () => {
  const [search, setSearch] = useRecoilState(searchTerm);
  const { state, contents } = useRecoilValueLoadable(searchList);

  console.log("state", state);
  console.log("contents", contents);

  return (
    <SearchBarWrapper>
      <InputSearch
        minLength={2}
        debounceTimeout={800}
        placeholder="Busque pelo seu herói"
        value={search}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
          setSearch(value)
        }
      />
      {search.length > 0 ? (
        <IconX
          role="button"
          height={22}
          width={22}
          color="#000000"
          onClick={() => setSearch("")}
        />
      ) : (
        <IconSearch role="button" height={22} width={22} color="#000000" />
      )}
    </SearchBarWrapper>
  );
};

export default SearchBar;
