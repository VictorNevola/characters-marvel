import { ChangeEvent, useCallback } from "react";
import { useRecoilState } from "recoil";
import { SearchBarWrapper, IconSearch, IconX, InputSearch } from "./styles";

import { searchOptions } from "@/store/search";

const SearchBar = () => {
  const [searchOptionsState, setSearch] = useRecoilState(searchOptions);

  const updateSearch = useCallback(
    (newValueSearch) => {
      let optionsUpdated = {
        ...searchOptionsState,
        offset: 0,
      };

      if (newValueSearch.length > 0) {
        optionsUpdated.nameStartsWith = newValueSearch;
      } else {
        delete optionsUpdated.nameStartsWith;
      }

      setSearch(optionsUpdated);
    },
    [searchOptionsState, setSearch]
  );

  return (
    <SearchBarWrapper data-cy="search">
      <InputSearch
        minLength={2}
        debounceTimeout={800}
        placeholder="Busque pelo seu herói"
        value={searchOptionsState.nameStartsWith}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
          updateSearch(value)
        }
      />
      {searchOptionsState.nameStartsWith &&
      searchOptionsState.nameStartsWith.length > 0 ? (
        <IconX
          role="button"
          height={22}
          width={22}
          color="#000000"
          onClick={() => updateSearch("")}
          data-cy="icon-close"
        />
      ) : (
        <IconSearch
          role="button"
          height={22}
          width={22}
          color="#000000"
          data-cy="icon-search"
        />
      )}
    </SearchBarWrapper>
  );
};

export default SearchBar;
