import Image from "next/image";
import dayjs from "dayjs";

import { Character } from "interfaces/character";

import {
  CardWrapper,
  CardImage,
  CardAbout,
  CardName,
  CardInfo,
  CardInfoList,
  CardInfoBtn,
} from "./styles";
import { useCallback } from "react";

const Card = ({
  name,
  thumbnail,
  modified,
  description,
  comics,
  id,
}: Character) => {
  const toggleList = useCallback(
    (typeList) => {
      const elementContainer = document.querySelector(
        `article[data-cardid="${id}"]`
      );
      const elementList = elementContainer?.querySelector(
        `div[data-infolist="${typeList}"]`
      );

      elementList?.classList.toggle("active");
    },
    [id]
  );

  return (
    <CardWrapper data-cardId={id}>
      <CardImage>
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name}
          layout="responsive"
          width={400}
          height={360}
          quality={90}
        />
      </CardImage>
      <CardAbout>
        <CardName>{name}</CardName>
        <CardInfo>
          <strong>Modificado em:</strong>
          {dayjs(modified).format("DD/MM/YYYY")}
        </CardInfo>

        <CardInfoList data-infoList="comics">
          <section>
            <div>
              <strong>Quadrinhos:</strong>
              {comics.items.length}
            </div>
            {comics.available ? (
              <CardInfoBtn onClick={() => toggleList("comics")}>
                {" "}
                Ver mais
              </CardInfoBtn>
            ) : null}
          </section>

          {comics.available ? (
            <ul>
              {comics.items.map((comic) => (
                <li key={comic.resourceURI}>{comic.name}</li>
              ))}
            </ul>
          ) : null}
        </CardInfoList>
      </CardAbout>
    </CardWrapper>
  );
};

export default Card;
