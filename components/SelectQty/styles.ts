import styled from "styled-components";

export const SelectQtyWrapper = styled.div`
  display: block;
  position: relative;
`;

export const SelectTtile = styled.span`
  display: block;
  font-size: 1.125rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    margin: 0px;
    margin-bottom: 8px;
    font-size: 16px;
  }
`;

export const SelectListContainer = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 4px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom-color: transparent;

      #select-list {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
      }

      #chevron-down {
        transform: rotate(180deg);
      }
    }
  }
`;

export const SelectedQuantity = styled.span`
  display: block;
  position: relative;
  font-size: 1.125rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  padding: 6px;

  svg {
    display: block;
    position: absolute;
    top: 26%;
    right: 10px;
    transition: all 0.3s ease-in-out;
  }
`;

export const SelectList = styled.ul`
  position: absolute;
  top: 28px;
  left: -1px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  transform: translateY(-4px);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SelectListOption = styled.li`
  padding: 6px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease-in-out;

  &#selected {
    background-color: ${({ theme }) => theme.colors.grayHover};
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayHover};
    color: ${({ theme }) => theme.colors.text};
  }
`;
