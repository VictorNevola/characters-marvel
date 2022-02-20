import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Link from "next/link";

import {
  FavoritesWrapper,
  FavoritesTitle,
  FavoritesCount,
  FavoritesEmptyPage,
  FavoritesLink,
  FavoritesList,
  FavoritesListContent,
} from "@/styles/pages/favoritos";

import fetch from "@/config/api";
import { favorites } from "@/store/favorites";
import { Container, SpinnerLoader } from "@/styles/utils";

import { Character } from "@/interfaces/character";
import { ApiMarvel } from "@/interfaces/apiMarvel";
import Card from "@/components/Card";

const Favorites = () => {
  const favoritesState = useRecoilValue(favorites);
  const [listCharacters, setListCharacters] = useState<Array<Character>>([]);
  const [loadingCharacters, setLoadingCharacters] = useState(true);

  useEffect(() => {
    async function getCharacters() {
      const charactersList = await Promise.all(
        favoritesState.map(async (idCharacter) => {
          const characterData = await fetch<ApiMarvel>(
            `/characters/${idCharacter}`,
            "GET"
          );
          return characterData.data.data.results[0];
        })
      );

      setListCharacters(charactersList);
      setLoadingCharacters(false);
    }

    if (favoritesState.length > 0) {
      getCharacters();
      return;
    }

    setLoadingCharacters(false);
  }, [favoritesState]);

  return (
    <FavoritesWrapper>
      <Container>
        <FavoritesTitle>Favoritos</FavoritesTitle>
        <FavoritesCount>
          {favoritesState.length}{" "}
          {favoritesState.length === 1 ? "encontrado" : "encontrados"}{" "}
        </FavoritesCount>

        {loadingCharacters ? (
          <SpinnerLoader>
            <div />
            <div />
            <div />
          </SpinnerLoader>
        ) : null}

        {!loadingCharacters && listCharacters.length === 0 ? (
          <FavoritesEmptyPage>
            <p>Você não possui nenhum favorito.</p>
            <Link href="/" passHref>
              <FavoritesLink>Voltar para a página inicial</FavoritesLink>
            </Link>
          </FavoritesEmptyPage>
        ) : (
          <FavoritesList>
            {listCharacters.map((character) => {
              return (
                <FavoritesListContent key={character.id}>
                  <Card {...character} />
                </FavoritesListContent>
              );
            })}
          </FavoritesList>
        )}
      </Container>
    </FavoritesWrapper>
  );
};

export default Favorites;
