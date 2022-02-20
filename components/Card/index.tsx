import Image from "next/image";
import dayjs from "dayjs";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/outline";

import { Character } from "@/interfaces/character";

import {
  CardWrapper,
  CardImage,
  CardAbout,
  CardName,
  CardInfo,
  CardBtnWishList,
} from "./styles";

import CardDropDown from "./dropDown";

const Card = ({
  name,
  thumbnail,
  modified,
  description,
  comics,
  series,
  stories,
  id,
}: Character) => {
  return (
    <CardWrapper data-cardid={id}>
      <CardImage>
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name}
          width={400}
          height={360}
        />
        <CardBtnWishList>
          <HeartIconOutline />
        </CardBtnWishList>
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
            {
              description.length > 0 ? description : "Não há descrição disponível"
            }
          </p>
        </CardInfo>
      </CardAbout>
    </CardWrapper>
  );
};

export default Card;
