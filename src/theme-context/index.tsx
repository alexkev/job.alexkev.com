import React, { useState } from 'react';

export type ThemeType = ReturnType<typeof themeGenertor>;

type RGB = {
  r: number;
  g: number;
  b: number;
  a?: number;
}

type ThemeCtx = {
  theme: ReturnType<typeof themeGenertor>;
  updateTheme: (rgb: RGB) => void;
};

const themeGenertor = (r: number, g: number, b: number) => {
  const primaryColorString = `rgb(${r}, ${g}, ${b})`;
  const primaryBoxShadow = `rgb(${r}, ${g}, ${b}, 0.3)`;
  const shadedPrimaryColorString = `rgb(${r + 31}, ${g + 37}, ${b + 31})`;
  const primaryGradient = `linear-gradient(-25deg, ${primaryColorString}, ${shadedPrimaryColorString})`;

  // calculate the background color based on the primary color
  const backgroundColor = `rgb(${r - 147}, ${g - 107}, ${b - 138})`;

  return {
    backgroundColor,
    primaryColorString,
    primaryBoxShadow,
    primaryGradient,
  }
}

const defaultPrimaryColor = themeGenertor(149, 172, 198);

export const presetColors = [
  defaultPrimaryColor, 
  themeGenertor(88, 125, 148),
  themeGenertor(8,121,184),
  themeGenertor(149, 198, 190),
  themeGenertor(25,193,167),
  themeGenertor(192, 36, 36),
].map(({ primaryColorString }) => primaryColorString);

export const ThemeContext = React.createContext<ThemeCtx>({
  theme: defaultPrimaryColor,
  updateTheme: ({ r, g, b }: RGB) => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode; }) {
  const [theme, setTheme ] = useState(defaultPrimaryColor);

  const updateTheme = ({ r, g, b }: RGB) => setTheme(themeGenertor(r, g, b));

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
  
