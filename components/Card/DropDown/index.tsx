import { ComicList, EventList, StoryList } from "@/interfaces/character";
import { useCallback } from "react";
import {
  CardDropDownWrapper,
  CardDropDownSection,
  CardDropDownTitleContent,
  CardDropDownBtn,
  CardDropDownList,
} from "./styles";

interface DropDownProps {
  id: number;
  title: string;
  listContent: ComicList | StoryList | EventList;
}

const CardDropDown = ({ id, title, listContent }: DropDownProps) => {
  const toggleList = useCallback(() => {
    const elementContainer = document.querySelector(
      `article[data-cardid="${id}"]`
    );
    const elementList = elementContainer?.querySelector(
      `div[data-infolist="${title}"]`
    );
    
    elementList?.classList.toggle("active");
  }, [id, title]);

  return (
    <CardDropDownWrapper data-infolist={title}>
      <CardDropDownSection>
        <CardDropDownTitleContent>
          <strong>{title}:</strong>
          {listContent.items.length}
        </CardDropDownTitleContent>

        {listContent.available ? (
          <CardDropDownBtn onClick={toggleList}>Ver mais</CardDropDownBtn>
        ) : null}
      </CardDropDownSection>
      {listContent.available ? (
        <CardDropDownList>
          {listContent.items.map((item) => (
            <li key={item.resourceURI}>{item.name}</li>
          ))}
        </CardDropDownList>
      ) : null}
    </CardDropDownWrapper>
  );
};

export default CardDropDown;
