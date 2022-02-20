import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/outline";

import { CardBtnWishList } from "./styles";
import { useRecoilState } from "recoil";
import { favoritesHandler } from "@/store/favorites";
interface CardBtnWishListProps {
  id: number;
}

const BtnWishlist = ({ id }: CardBtnWishListProps) => {
  const [isWishlisted, setWishlist] = useRecoilState(favoritesHandler(id));

  return (
    <CardBtnWishList onClick={() => setWishlist((prev) => !prev)}>
      {isWishlisted ? <HeartIconSolid /> : <HeartIconOutline />}
    </CardBtnWishList>
  );
};

export default BtnWishlist;
