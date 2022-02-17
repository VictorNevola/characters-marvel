import styled from "styled-components";

export const BannerContainer = styled.section`
  text-align: center;
  padding: 1rem 0px;

  & > span {
    box-shadow: 0px 5px 12px #292929;
  }

  .image {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    @media (max-width: 1440px) {
      border-radius: 0px;
    }
  }

  @media (max-width: 1440px) {
    padding: 0px;
  }
`;
