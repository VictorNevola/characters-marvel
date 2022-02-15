import styled from "styled-components";
import { SearchIcon } from "@heroicons/react/solid";

import { DebounceInput } from "react-debounce-input";

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  border-radius: 4px;
  padding: 0px .875rem;
  max-width: 36.25rem;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const IconSearch = styled(SearchIcon)`
  display: block;
`;

export const InputSearch = styled(DebounceInput)`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: .75rem 0px;
  font-size: .875rem;
  color: ${(props) => props.theme.colors.text};
`;
