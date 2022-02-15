import { ChangeEvent } from "react";
import { SearchBarWrapper, IconSearch, InputSearch } from "./styles";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <InputSearch
        minLength={4}
        debounceTimeout={500}
        placeholder="Busque pelo seu herói"
        onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
          console.log(target.value)
        }
      />
      <IconSearch height={22} width={22} color="#000000" />
    </SearchBarWrapper>
  );
};

export default SearchBar;
