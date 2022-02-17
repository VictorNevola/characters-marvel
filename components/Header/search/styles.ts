import styled from "styled-components";
import { SearchIcon, XIcon } from "@heroicons/react/solid";

import { DebounceInput } from "react-debounce-input";

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  background: #fff;
  border-radius: 4px;
  padding: 0px 0.875rem;
  max-width: 36.25rem;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 6px;
  
  @media(max-width: 768px) {
    max-width: 16.25rem;
    padding: 0px 0.475rem;
  }
`;

export const IconSearch = styled(SearchIcon)`
  display: block;
  cursor: pointer;
`;

export const IconX = styled(XIcon)`
  display: block;
  cursor: pointer;
`;

export const InputSearch = styled(DebounceInput)`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0.75rem 0px;
  font-size: 0.875rem;
  color: #000;

  @media(max-width: 768px) {
    padding: 0.4rem 0px;
    font-size: 12px;
  }
`;
