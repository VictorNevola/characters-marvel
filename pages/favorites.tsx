import { favorites } from "@/store/favorites";
import { FavoritesWrapper, FavoritesTitle, FavoritesCount } from "@/styles/pages/favorites";
import { Container } from "@/styles/utils";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const Favorites = () => {

  const favoritesState = useRecoilValue(favorites);

  return (
    <FavoritesWrapper>
      <Container>
        <FavoritesTitle>Favoritos</FavoritesTitle>
        <FavoritesCount>{ favoritesState.length } {
          favoritesState.length === 1 ? "encontrado" : "encontrados"
        } </FavoritesCount>
      </Container>
    </FavoritesWrapper>
  )
};

export default Favorites;
