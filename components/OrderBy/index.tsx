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

  return (
    <OrderByWrapper>
      <OrderByTitle>Ordenar</OrderByTitle>

      <OrderByButton 
        title="A - Z"
        id={orderBySelected === orderByEnum.asc ? "active" : ""}
        onClick={() => setOrderBy(orderByEnum.asc)}
      >
        <AscIcon width={26} height={26} />
        A - Z
      </OrderByButton>

      <OrderByButton 
        title="Z - A"
        id={orderBySelected === orderByEnum.desc ? "active" : ""}
        onClick={() => setOrderBy(orderByEnum.desc)}
      >
        <DescIcon width={26} height={26} />
        Z - A
      </OrderByButton>
    </OrderByWrapper>
  );
};

export default OrderBy;
