import Image from "next/image";
import Link from "next/link";

import { LogoLink } from "./styles";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <LogoLink>
        <Image
          src="/images/logo-marvel.png"
          alt="Logo"
          width={98}
          height={38}
          data-cy="logo"
        />
      </LogoLink>
    </Link>
  );
};

export default Logo;
