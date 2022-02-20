import styled from "styled-components";

export const PaginationWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 34px;

  .pagination_list {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      cursor: pointer;
      padding: 5px 10px;
      margin: 0 6px;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.text};
      transition: all 0.3s ease;

      &.selected {
        background-color: ${({ theme }) => theme.colors.tertiary};
        color: #fff;
      }

      &.disabled {
        cursor: not-allowed;
      }

      svg {
        path {
          fill: ${({ theme }) => theme.colors.text};
        }
      }
    }

    @media (max-width: 768px) {
     flex-wrap: wrap;
    }
  }
`;
