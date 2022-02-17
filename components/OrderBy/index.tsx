import { useSetRecoilState, useRecoilValue } from "recoil";
import { orderByState, orderByEnum } from "@/store/orderBy";
import {
  OrderByWrapper,
  OrderByButton,
  AscIcon,
  DescIcon,
  OrderByTitle,
} from "./styles";

const OrderBy = () => {
  const setOrderBy = useSetRecoilState(orderByState);
  const orderBySelected = useRecoilValue(orderByState);

  console.log('orderBySelected', orderBySelected);

  return (
    <OrderByWrapper>
      <OrderByTitle>Ordenar :</OrderByTitle>

      <OrderByButton 
        title="A - Z"
        onClick={() => setOrderBy(orderByEnum.asc)}
      >
        <AscIcon width={26} height={26} />
      </OrderByButton>

      <OrderByButton 
        title="Z - A"
        onClick={() => setOrderBy(orderByEnum.desc)}
      >
        <DescIcon width={26} height={26} />
      </OrderByButton>
    </OrderByWrapper>
  );
};

export default OrderBy;
