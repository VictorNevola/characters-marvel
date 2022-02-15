import { useTheme } from 'next-themes';

import { SunIconBtn, MoonIconBtn } from "./style";

import light from "@/styles/themes/light";
import dark from "@/styles/themes/dark";

const ToggleTheme = () => {

  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <SunIconBtn width={24} height={24} role="button" onClick={() => setTheme('light')} />
      ) : (
        <MoonIconBtn width={24} height={24} role="button" onClick={() => setTheme('dark')} />
      )}
    </>
  );
};

export default ToggleTheme;
