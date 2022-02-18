import type { NextPage } from "next";
import { useRecoilValue } from "recoil";

import {
  HomeWrapper,
  Title,
  TitleSpan,
  HomeTopContent,
  HomeTopActions,
  Count,
} from "@/styles/pages/home";

import { searchTerm } from "@/store/search";
import OrderBy from "@/components/OrderBy";
import SelectQty from "@/components/SelectQty";

const Home: NextPage = () => {
  const searchText = useRecoilValue(searchTerm);

  return (
    <HomeWrapper>
      <Title>
        {searchText.length > 0 ? (
          <TitleSpan data-cy="title-page">
            Buscando por <strong> {searchText}</strong>
          </TitleSpan>
        ) : (
          <TitleSpan data-cy="title-page"> Personagens </TitleSpan>
        )}
      </Title>
      <HomeTopContent>
        <Count>12321 encontrados</Count>

        <HomeTopActions>
          <OrderBy />
          <SelectQty />
        </HomeTopActions>
      </HomeTopContent>
    </HomeWrapper>
  );
};

export default Home;
