import Image from "next/image";

import { Character } from "interfaces/character";

import { CardWrapper, CardImage } from "./styles";

const Card = ( { name, thumbnail }: Character) => {

  return(
    <CardWrapper> 
      <CardImage>
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name}
          width={348}
          height={246}
        />
      </CardImage>
    </CardWrapper>
  )

};

export default Card;