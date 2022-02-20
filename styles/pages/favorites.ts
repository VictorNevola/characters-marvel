import styled from "styled-components";

export const FavoritesWrapper = styled.section`
  padding: 2.25rem 1rem;
  min-height: calc(100vh - 62px);
`;

export const FavoritesTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const FavoritesCount = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 1.25rem;
  font-weight: normal;
  letter-spacing: 2px;
  margin: 0;
  margin: 14px 0 22px 0px;
  border-bottom: 1px solid #9797977d;
  padding-bottom: 14px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
    width: 100%;
    margin-bottom: 12px;
  }
`;
