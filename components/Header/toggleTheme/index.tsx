import { useTheme } from "next-themes";
import Image from "next/image";

import { IconWrapper } from "./style";

import SunIcon from "@/public/icons/sun.svg";
import MoonIcon from "@/public/icons/moon.svg";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <IconWrapper onClick={() => setTheme("light")}>
          <Image src={SunIcon} width={24} height={24} alt="" />
        </IconWrapper>
      ) : (
        <IconWrapper onClick={() => setTheme("dark")}>
          <Image src={MoonIcon} width={24} height={24} alt="" />
        </IconWrapper>
      )}
    </>
  );
};

export default ToggleTheme;
