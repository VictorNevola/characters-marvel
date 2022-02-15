import { Container } from "@/styles/utils";
import { HeaderWrapper, HeaderNav, HeadertActions } from "./styles";

import Logo from "./logo";
import ToggleTheme from "./toggleTheme";
import SearchBar from "./search";
import Profile from "./profile";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderNav>
          <Logo />
          <SearchBar />
          <HeadertActions>
            <ToggleTheme />
            <Profile />
          </HeadertActions>
        </HeaderNav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
