import type { NextPage } from "next";
import { useRecoilValue } from "recoil";

import {
  HomeWrapper,
  Title,
  TitleSpan,
  HomeTopContent,
  Count,
} from "@/styles/pages/home";

import { searchTerm } from "@/store/search";
import OrderBy from "@/components/OrderBy";

const Home: NextPage = () => {
  const searchText = useRecoilValue(searchTerm);

  return (
    <HomeWrapper>
      <Title>
        {searchText.length > 0 ? (
          <TitleSpan>
            Buscando por <strong> {searchText}</strong>
          </TitleSpan>
        ) : (
          <TitleSpan> Personagens </TitleSpan>
        )}
      </Title>
      <HomeTopContent>
        <Count> 
          123123123 encontrados
        </Count>
        <OrderBy />
      </HomeTopContent>
    </HomeWrapper>
  );
};

export default Home;
