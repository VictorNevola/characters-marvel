import Image from 'next/image';

const Logo = () => {
  return (
    <Image 
      src="/images/logo-marvel.png"
      alt="Logo"
      width={98}
      height={38}
      data-cy="logo"
    />
  )
};

export default Logo;