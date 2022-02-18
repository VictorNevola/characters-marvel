import { SelectQtyWrapper, SelectTtile, SelectListContainer } from "./styles";

const SelectQty = () => {

  const defaultValues = [20, 40, 60, 80, 100];

  return (
    <SelectQtyWrapper>
      <SelectTtile>
        Quantidade
      </SelectTtile>

      <SelectListContainer>
          10
      </SelectListContainer>

    </SelectQtyWrapper>
  )

};

export default SelectQty;