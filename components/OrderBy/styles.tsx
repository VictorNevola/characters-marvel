import styled from "styled-components";
import { SortAscendingIcon, SortDescendingIcon } from "@heroicons/react/solid";

export const OrderByWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media(max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const OrderByButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;

  font-size: 13px;
  line-height: 16px;
  transition: all .3s ease;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;

  &#active {
    opacity: 1;
  }

  svg {
    margin-right: 8px;
  }
`;

export const OrderByTitle = styled.span`
  font-size: 1.125rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 12px;

  @media(max-width: 768px) {
    display: block;
    width: 100%;
    margin: 0px;
    margin-bottom: 8px;
    font-size: 16px;
  }
`;

export const AscIcon = styled(SortAscendingIcon)`
  color: ${props => props.theme.colors.tertiary};
`;

export const DescIcon = styled(SortDescendingIcon)`
  color: ${props => props.theme.colors.tertiary};
`;