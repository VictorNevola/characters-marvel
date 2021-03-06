import Image from "next/image";
import dayjs from "dayjs";
import { Character } from "@/interfaces/character";

import {
  CardWrapper,
  CardImage,
  CardAbout,
  CardName,
  CardInfo,
} from "./styles";

import CardDropDown from "./DropDown";
import BtnWishlist from "./BtnWishlist";

const Card = (character: Character) => {
  const {
    name,
    thumbnail,
    modified,
    description,
    comics,
    series,
    stories,
    id,
  } = character;

  return (
    <CardWrapper data-cardid={id}>
      <CardImage>
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name}
          width={400}
          height={360}
        />
        <BtnWishlist {...character} />
      </CardImage>
      <CardAbout>
        <CardName>{name}</CardName>
        <CardInfo>
          <strong>Modificado em:</strong>
          {dayjs(modified).format("DD/MM/YYYY")}
        </CardInfo>

        <CardDropDown title="Quadrinhos" listContent={comics} id={id} />

        <CardDropDown title="Séries" listContent={series} id={id} />

        <CardDropDown title="Histórias" listContent={stories} id={id} />

        <CardInfo>
          <strong>Descrição:</strong>
          <p>
            {description.length > 0
              ? description
              : "Não há descrição disponível"}
          </p>
        </CardInfo>
      </CardAbout>
    </CardWrapper>
  );
};

export default Card;
