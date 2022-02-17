import { OrderByWrapper, OrderByButton, AscIcon, DescIcon, OrderByTitle } from "./styles";

const OrderBy = () => {

  return (
    <OrderByWrapper>

      <OrderByTitle>
        Ordenar :
      </OrderByTitle>

      <OrderByButton>
        <AscIcon width={26} height={26} />
      </OrderByButton>

      <OrderByButton>
        <DescIcon width={26} height={26} />
      </OrderByButton>

    </OrderByWrapper>
  )
};

export default OrderBy;