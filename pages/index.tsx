import type { NextPage } from "next";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";

import {
  HomeWrapper,
  Title,
  TitleSpan,
  HomeTopContent,
  HomeTopActions,
  Count,
} from "@/styles/pages/home";

import {
  defaultValuesToSearch,
  ParamsOptions,
  searchOptions,
} from "@/store/search";
import OrderBy from "@/components/OrderBy";
import SelectQty from "@/components/SelectQty";
import fetch from "@/config/api";
import { ApiMarvel } from "interfaces/apiMarvel";
import { useCallback, useEffect, useState } from "react";
interface HomeProps {
  initialCharacters: ApiMarvel;
  initialParamsSearch: ParamsOptions;
}

const Home: NextPage<HomeProps> = ({
  initialCharacters,
  initialParamsSearch,
}) => {
  const searchOptionState = useRecoilValue(searchOptions);
  const [charactersList, setCharactersList] = useState(initialCharacters.data);
  const [loadingPage, setLoadingPage] = useState(false);

  const fetchNewCharacters = useCallback(async () => {
    const {
      data: { data },
    } = await fetch<ApiMarvel>("characters", "GET", searchOptionState);

    setCharactersList(data);
    setLoadingPage(false);
  }, [searchOptionState]);

  useEffect(() => {
    const paramsToSearchIsEqualInitial =
      JSON.stringify(initialParamsSearch) === JSON.stringify(searchOptionState);

    if (!paramsToSearchIsEqualInitial) {
      setLoadingPage(true);
      fetchNewCharacters();
    }

    setCharactersList(initialCharacters.data);
    setLoadingPage(false);
  }, [
    fetchNewCharacters,
    initialCharacters.data,
    initialParamsSearch,
    searchOptionState,
  ]);

  return (
    <HomeWrapper>
      <Title>
        {searchOptionState.nameStartsWith &&
        searchOptionState.nameStartsWith.length > 0 ? (
          <TitleSpan data-cy="title-page">
            Buscando por <strong> {searchOptionState.nameStartsWith}</strong>
          </TitleSpan>
        ) : (
          <TitleSpan data-cy="title-page"> Personagens </TitleSpan>
        )}
      </Title>
      <HomeTopContent>
        <Count>{charactersList.total} encontrados</Count>

        <HomeTopActions>
          <OrderBy />
          <SelectQty />
        </HomeTopActions>
      </HomeTopContent>
    </HomeWrapper>
  );
};

export async function getServerSideProps() {
  const res = await fetch<ApiMarvel>(
    `/characters`,
    "GET",
    defaultValuesToSearch
  );

  return {
    props: {
      initialCharacters: res.data,
      initialParamsSearch: defaultValuesToSearch,
    },
  };
}

export default Home;
