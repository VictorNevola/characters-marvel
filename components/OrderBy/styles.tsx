import styled from "styled-components";
import { SortAscendingIcon, SortDescendingIcon } from "@heroicons/react/solid";

export const OrderByWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrderByButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
`;

export const OrderByTitle = styled.span`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const AscIcon = styled(SortAscendingIcon)`
  color: ${props => props.theme.colors.tertiary};
`;

export const DescIcon = styled(SortDescendingIcon)`
  color: ${props => props.theme.colors.tertiary};
`;