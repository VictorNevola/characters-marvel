import Image from "next/image";
import { BannerContainer } from "./styles";

interface IBannerProps {
  urlImage: string;
  imgWidth: number;
  imgHeight: number;
  nameImage: string;
}

const Banner = ({ urlImage, nameImage, imgWidth, imgHeight }: IBannerProps) => {
  return (
    <BannerContainer data-cy="banner-container">
      <Image
        className="image"
        src={urlImage}
        alt={nameImage}
        width={imgWidth}
        height={imgHeight}
        quality={100}
      />
    </BannerContainer>
  );
};

export default Banner;
