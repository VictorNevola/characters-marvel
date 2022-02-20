import type { NextPage } from "next";
import { useRecoilValue } from "recoil";

import {
  HomeWrapper,
  Title,
  TitleSpan,
  HomeTopContent,
  HomeTopActions,
  Count,
  Shimmer,
  HomeList,
  HomeListContent,
  HomeLoader,
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
import Card from "@/components/Card";
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
      return;
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
        {loadingPage ? (
          <Shimmer />
        ) : (
          <Count>
            {charactersList.total}{" "}
            {charactersList.total > 1 ? "encontrados" : "encontrado"}
          </Count>
        )}
        <HomeTopActions>
          <OrderBy />
          <SelectQty />
        </HomeTopActions>
      </HomeTopContent>

      {loadingPage ? (
        <HomeLoader>
          <div />
          <div />
          <div />
        </HomeLoader>
      ) : (
        <>
          {charactersList.total === 0 &&
          searchOptionState.nameStartsWith !== "" ? (
            <h2>Nenhum personagem encontrado</h2>
          ) : (
            <HomeList>
              {charactersList.results.map((character) => (
                <HomeListContent key={character.id}>
                  <Card {...character} />
                </HomeListContent>
              ))}
            </HomeList>
          )}
        </>
      )}
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
