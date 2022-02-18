import {
  SelectQtyWrapper,
  SelectTtile,
  SelectListContainer,
  SelectedQuantity,
  SelectList,
  SelectListOption,
} from "./styles";

import { useRecoilState, useRecoilValue } from "recoil";
import { ChevronDownIcon } from "@heroicons/react/solid";

import { defaultValuesQuantity, searchOptions } from "@/store/search";

const SelectQty = () => {
  const [searOptionState, setSearchOptions] = useRecoilState(searchOptions);
  const searOptionValues = useRecoilValue(searchOptions);

  return (
    <SelectQtyWrapper>
      <SelectTtile>Quantidade</SelectTtile>

      <SelectListContainer>
        <SelectedQuantity>
          {
            searOptionValues.qtySelected
          }
          <ChevronDownIcon id="chevron-down" width={16} height={16} />
        </SelectedQuantity>
        <SelectList id="select-list">
          {defaultValuesQuantity.map((value) => (
            <SelectListOption
              key={(window as any).crypto.randomUUID()}
              id={value === searOptionValues.qtySelected ? "selected" : ""}
              onClick={() =>
                setSearchOptions({
                  ...searOptionState,
                  qtySelected: value,
                })
              }
            >
              {value}
            </SelectListOption>
          ))}
        </SelectList>
      </SelectListContainer>
    </SelectQtyWrapper>
  );
};

export default SelectQty;
