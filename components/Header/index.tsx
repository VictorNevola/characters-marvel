import { Container } from "@/styles/utils";
import { HeaderWrapper, HeaderNav } from "./styles";

import Logo from "./logo";
import ToggleTheme from "./toggleTheme";
import SearchBar from "./search";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderNav> 
          <Logo />
          <SearchBar />
          <ToggleTheme />
        </HeaderNav>
      </Container>
    </HeaderWrapper>
  )
};

export default Header;