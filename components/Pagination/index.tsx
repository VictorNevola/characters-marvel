import { useCallback } from "react";
import ReactPaginate from "react-paginate";
import { useRecoilState } from "recoil";

import { searchOptions } from "@/store/search";

import { PaginationWrapper } from "./styles";
import scrollTo from "@/utils/scrollTo";

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const [searchPageOptionState, setSearchPageOptionState] =
    useRecoilState(searchOptions);

  const chagePage = useCallback(
    (pageSelected) => {
      const elementToScroll = document.querySelector("header");
      const viewportOffset = elementToScroll?.getBoundingClientRect().top || 0;

      setSearchPageOptionState({
        ...searchPageOptionState,
        offset:
          pageSelected === 0 ? 0 : pageSelected * searchPageOptionState.limit,
      });

      scrollTo(viewportOffset);
    },
    [searchPageOptionState, setSearchPageOptionState]
  );

  return (
    <PaginationWrapper>
      <ReactPaginate
        className="pagination_list"
        pageCount={totalPages}
        onPageChange={({ selected }) => chagePage(selected)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        initialPage={0}
        nextLabel={
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.86221 6.31825C7.04593 6.13105 7.04593 5.86895 6.86221 5.68175L1.46063 0.140405C1.31365 -0.0468021 1.01969 -0.0468021 0.835959 0.140405L0.137796 0.889235C-0.0459304 1.07644 -0.0459304 1.33853 0.137796 1.52574L4.47375 6.01872L0.137796 10.4743C-0.0459312 10.6615 -0.0459312 10.961 0.137796 11.1108L0.835958 11.8596C1.01969 12.0468 1.31365 12.0468 1.46063 11.8596L6.86221 6.31825Z" />
          </svg>
        }
        previousLabel={
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.137795 5.68175C-0.0459318 5.86895 -0.0459318 6.13105 0.137795 6.31825L5.53937 11.8596C5.68635 12.0468 5.98031 12.0468 6.16404 11.8596L6.8622 11.1108C7.04593 10.9236 7.04593 10.6615 6.8622 10.4743L2.52625 5.98128L6.8622 1.52574C7.04593 1.33853 7.04593 1.039 6.8622 0.889236L6.16404 0.140406C5.98031 -0.0468019 5.68635 -0.0468019 5.53937 0.140406L0.137795 5.68175Z" />
          </svg>
        }
      />
    </PaginationWrapper>
  );
};

export default Pagination;
