import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/outline";

import { CardBtnWishList } from "./styles";
import { useRecoilState } from "recoil";
import { favoritesHandler } from "@/store/favorites";
import { Character } from "@/interfaces/character";

const BtnWishlist = ({ id }: Character) => {
  const [isWishlisted, setWishlist] = useRecoilState(favoritesHandler(id));

  return (
    <CardBtnWishList onClick={() => setWishlist((prev) => !prev)}>
      {isWishlisted ? <HeartIconSolid /> : <HeartIconOutline />}
    </CardBtnWishList>
  );
};

export default BtnWishlist;
