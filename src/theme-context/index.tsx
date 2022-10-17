import React, { useState } from 'react';

export type ThemeType = ReturnType<typeof themeGenertor>;

const defaultTheme = {
  backgroundColor: "rgb(40, 44, 52)",
  primaryColor: {
    r: 187,
    g: 151,
    b: 190,
  }
};

const themeGenertor = (theme: typeof defaultTheme) => {
  const { backgroundColor, primaryColor } = theme;
  const primaryColorString = `rgb(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b})`;
  const primaryBoxShadow = `rgb(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0.3)`;
  const shadedPrimaryColorString = `rgb(${primaryColor.r + 31}, ${primaryColor.g + 37}, ${primaryColor.b + 31})`;
  const primaryGradient = `linear-gradient(-25deg, ${primaryColorString}, ${shadedPrimaryColorString})`;
  
  return {
    backgroundColor,
    primaryColorString,
    primaryBoxShadow,
    primaryGradient,
  }
}

type ThemeCtx = {
  theme: ReturnType<typeof themeGenertor>;
  // setTheme: (theme: typeof defaultTheme) => void;
};

export const ThemeContext = React.createContext<ThemeCtx>({
  theme: themeGenertor(defaultTheme),
  // setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode; }) {
  const [theme, setTheme ] = useState(themeGenertor(defaultTheme));

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
  
