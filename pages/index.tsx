import type { NextPage } from "next";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";

import {
  HomeWrapper,
  Title,
  TitleSpan,
  HomeTopContent,
  HomeTopActions,
  Count,
} from "@/styles/pages/home";

import {
  customSearchCharacters,
  defaultValuesQuantity,
  orderByEnum,
  searchOptions,
} from "@/store/search";
import OrderBy from "@/components/OrderBy";
import SelectQty from "@/components/SelectQty";
import fetch from "@/config/api";
import { ApiMarvel } from "interfaces/apiMarvel";
interface HomeProps {
  initialCharacters: ApiMarvel;
  initialOptions: {
    orderBy: orderByEnum.asc;
    limit: number;
  };
}

const Home: NextPage<HomeProps> = ({ initialCharacters, initialOptions }) => {
  const searchOptionState = useRecoilValue(searchOptions);

  console.log("initialOptions", initialOptions);
  console.log("searchOptionsState", searchOptionState);

  // const customSearchCharacted = useRecoilValueLoadable(customSearchCharacters);

  // console.log("customSearchCharacted", customSearchCharacted);

  return (
    <HomeWrapper>
      <Title>
        {searchOptionState.nameStartsWith && searchOptionState.nameStartsWith.length > 0 ? (
          <TitleSpan data-cy="title-page">
            Buscando por <strong> {searchOptionState.nameStartsWith}</strong>
          </TitleSpan>
        ) : (
          <TitleSpan data-cy="title-page"> Personagens </TitleSpan>
        )}
      </Title>
      <HomeTopContent>
        <Count>{initialCharacters.data.total} encontrados</Count>

        <HomeTopActions>
          <OrderBy />
          <SelectQty />
        </HomeTopActions>
      </HomeTopContent>
    </HomeWrapper>
  );
};

export async function getServerSideProps() {
  const initialParams = {
    orderBy: orderByEnum.asc,
    limit: defaultValuesQuantity[0],
  };

  const res = await fetch<ApiMarvel>(`/characters`, "GET", initialParams);

  return {
    props: {
      initialCharacters: res.data,
      initialOptions: initialParams,
    },
  };
}

export default Home;
