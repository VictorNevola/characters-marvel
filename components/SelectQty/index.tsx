import { SelectQtyWrapper, SelectTtile, SelectListContainer, SelectedOrderBy } from "./styles";

const SelectQty = () => {

  const defaultValues = [20, 40, 60, 80, 100];

  return (
    <SelectQtyWrapper>
      <SelectTtile>
        Quantidade
      </SelectTtile>

      <SelectListContainer>
          <SelectedOrderBy>
            20
          </SelectedOrderBy>
      </SelectListContainer>

    </SelectQtyWrapper>
  )

};

export default SelectQty;