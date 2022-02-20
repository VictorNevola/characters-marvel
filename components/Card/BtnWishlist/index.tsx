import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/outline";

import { CardBtnWishList } from "./styles";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { wishlistHandler } from "@/store/wishlist";
import { useCallback } from "react";

interface CardBtnWishListProps {
  id: number;
}

const BtnWishlist = ({ id }: CardBtnWishListProps) => {
  const [isWishlisted, setWishlist] = useRecoilState(wishlistHandler(id));

  return (
    <CardBtnWishList onClick={() => setWishlist((prev) => !prev)}>
      {isWishlisted ? <HeartIconSolid /> : <HeartIconOutline />}
    </CardBtnWishList>
  );
};

export default BtnWishlist;
