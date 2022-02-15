import { Container } from "@/styles/utils";
import { HeaderWrapper, HeaderNav } from "./styles";

import Logo from "./logo";
import ToggleTheme from "./toggleTheme";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderNav> 
          <Logo />
          <ToggleTheme />
        </HeaderNav>
      </Container>
    </HeaderWrapper>
  )
};

export default Header;