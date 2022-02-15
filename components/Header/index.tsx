import { HeaderContainer } from "./styles";

import ToggleTheme from "./toggleTheme";

const Header = () => {
  return (
    <HeaderContainer>
      <h1> aqui é o header </h1>
      <ToggleTheme />
    </HeaderContainer>
  )
};

export default Header;