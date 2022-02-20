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
          layout="responsive"
          width={2400}
          height={1598}
          quality={90}
        />
      </CardImage>
    </CardWrapper>
  )

};

export default Card;