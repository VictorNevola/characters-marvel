import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { SearchBarWrapper, IconSearch, IconX, InputSearch } from "./styles";

import { searchOptions } from "@/store/search";

const SearchBar = () => {
  const [search, setSearch] = useRecoilState(searchOptions);

  return (
    <SearchBarWrapper data-cy="search">
      <InputSearch
        minLength={2}
        debounceTimeout={800}
        placeholder="Busque pelo seu herói"
        value={search.nameStartsWith}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
          setSearch({
            ...search,
            nameStartsWith: value,
          })
        }
      />
      {search.nameStartsWith && search.nameStartsWith.length > 0 ? (
        <IconX
          role="button"
          height={22}
          width={22}
          color="#000000"
          onClick={() => setSearch({ ...search, nameStartsWith: "" })}
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
