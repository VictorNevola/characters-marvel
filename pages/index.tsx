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

import { defaultValuesQuantity, searchTerm } from "@/store/search";
import OrderBy from "@/components/OrderBy";
import SelectQty from "@/components/SelectQty";
import fetch from "@/config/api";
import { ApiMarvel } from "interfaces/apiMarvel";

interface HomeProps {
  initialCharacters: ApiMarvel;
}

const Home: NextPage<HomeProps> = ({ initialCharacters }) => {
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
        <Count>{ initialCharacters.data.total } encontrados</Count>

        <HomeTopActions>
          <OrderBy />
          <SelectQty />
        </HomeTopActions>
      </HomeTopContent>
    </HomeWrapper>
  );
};

export async function getServerSideProps() {
  const res = await fetch<ApiMarvel>(`/characters`, "GET");

  return { props: { initialCharacters: res.data } };
}

export default Home;
