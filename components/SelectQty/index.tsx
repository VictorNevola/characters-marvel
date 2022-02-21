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
import { useCallback } from "react";

const SelectQty = () => {
  const [searOptionState, setSearchOptions] = useRecoilState(searchOptions);
  const searOptionValues = useRecoilValue(searchOptions);

  const toggleSelectQty = useCallback(() => {
    const elementContainer = document.querySelector("#selectQtyContainer");

    elementContainer?.classList.toggle("active");

  }, []);

  return (
    <SelectQtyWrapper>
      <SelectTtile>Quantidade</SelectTtile>

      <SelectListContainer id="selectQtyContainer">
        <SelectedQuantity 
          onClick={toggleSelectQty}
        >
          {searOptionValues.limit}
          <ChevronDownIcon id="chevron-down" width={16} height={16} />
        </SelectedQuantity>
        <SelectList id="select-list">
          {defaultValuesQuantity.map((value) => (
            <SelectListOption
              key={(window as any).crypto.randomUUID()}
              id={value === searOptionValues.limit ? "selected" : ""}
              onClick={() =>
                setSearchOptions({
                  ...searOptionState,
                  limit: value,
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
