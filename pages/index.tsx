import { useCallback, useEffect, useState } from "react";
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
} from "@/styles/pages/home";
import { SpinnerLoader } from "@/styles/utils";

import fetch from "@/config/api";
import {
  defaultValuesToSearch,
  ParamsOptions,
  searchOptions,
} from "@/store/search";

import OrderBy from "@/components/OrderBy";
import SelectQty from "@/components/SelectQty";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";

import { ApiMarvel } from "interfaces/apiMarvel";
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
        <SpinnerLoader>
          <div />
          <div />
          <div />
        </SpinnerLoader>
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

      <Pagination
        totalPages={
          Math.round(charactersList.total / searchOptionState.limit) || 1
        }
      />
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
