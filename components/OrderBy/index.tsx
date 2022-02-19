import { useRecoilValue, useRecoilState } from "recoil";
import { searchOptions, orderByEnum } from "@/store/search";
import {
  OrderByWrapper,
  OrderByButton,
  AscIcon,
  DescIcon,
  OrderByTitle,
  OrderByList,
} from "./styles";

const OrderBy = () => {
  const [searOptionState, setSearchOptions] = useRecoilState(searchOptions);
  const orderBySelected = useRecoilValue(searchOptions);

  return (
    <OrderByWrapper>
      <OrderByTitle>Ordenar</OrderByTitle>

      <OrderByList>
        <OrderByButton
          title="A - Z"
          id={orderBySelected.orderBy === orderByEnum.asc ? "active" : ""}
          onClick={() =>
            setSearchOptions({
              ...searOptionState,
              orderBy: orderByEnum.asc,
            })
          }
        >
          <AscIcon width={26} height={26} />A - Z
        </OrderByButton>

        <OrderByButton
          title="Z - A"
          id={orderBySelected.orderBy === orderByEnum.desc ? "active" : ""}
          onClick={() =>
            setSearchOptions({
              ...searOptionState,
              orderBy: orderByEnum.desc,
            })
          }
        >
          <DescIcon width={26} height={26} />Z - A
        </OrderByButton>
      </OrderByList>
    </OrderByWrapper>
  );
};

export default OrderBy;
