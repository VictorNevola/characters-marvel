import styled from "styled-components";

export const SelectQtyWrapper = styled.div`
  display: block;
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
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  padding: 8px;
  border-radius: 4px;
  padding: 6px;
  text-align: center;
`;
