import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//colors for design
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          DEFAULT: "#666666",
          0: "#C2C2C2",
          100: "#B8B8B8",
          200: "#A3A3A3",
          300: "#8F8F8F",
          400: "#7A7A7A",
          500: "#666666",
          600: "#4A4A4A",
          700: "#2E2E2E",
          800: "#121212",
          900: "#000000"
        },
        primary: {
          DEFAULT: "#141B2D",
          0: "#4C67AC",
          100: "#465F9E",
          200: "#3A4E82",
          300: "#2D3D65",
          400: "#f2f0f0",
          500: "#141B2D",
          600: "#030406",
          700: "#000000",
          800: "#000000",
          900: "#000000"
        },
        greenAccent: {
          DEFAULT: "#4CCEAC",
          0: "#DCF5EF",
          100: "#CCF1E7",
          200: "#ACE8D9",
          300: "#8CE0CA",
          400: "#6CD7BB",
          500: "#4CCEAC",
          600: "#31B190",
          700: "#24856C",
          800: "#185948",
          900: "#185948",
          1000: "#185948",
          1100: "#185948",
          1200: "#185948"
        },
        redAccent: {
          DEFAULT: "#DB4F4A",
          0: "#F9E4E3",
          100: "#F6D3D2",
          200: "#EFB2B0",
          300: "#E9918E",
          400: "#E2706C",
          500: "#DB4F4A",
          600: "#C62D27",
          700: "#97221E",
          800: "#681815",
          900: "#681815",
          1000: "#681815",
          1100: "#681815",
          1200: "#681815"
        },
        blueAccent: {
          DEFAULT: "#6870FA",
          0: "#FFFFFF",
          100: "#FFFFFF",
          200: "#DEE0FE",
          300: "#B7BBFD",
          400: "#8F95FB",
          500: "#6870FA",
          600: "#323DF8",
          700: "#0814EA",
          800: "#060FB4",
          900: "#040B7D"
        }
      }
    : {
        grey: {
          DEFAULT: "#666666",
          0: "#000000",
          100: "#121212",
          200: "#2E2E2E",
          300: "#4A4A4A",
          400: "#666666",
          500: "#7A7A7A",
          600: "#8F8F8F",
          700: "#A3A3A3",
          800: "#B8B8B8",
          900: "#C2C2C2"
        },
        primary: {
          DEFAULT: "#141B2D",
          0: "#000000",
          100: "#000000",
          200: "#000000",
          300: "#030406",
          400: "#f2f0f0",
          500: "#212C49",
          600: "#2D3D65",
          700: "#3A4E82",
          800: "#465F9E",
          900: "#4C67AC"
        },
        greenAccent: {
          DEFAULT: "#4CCEAC",
          0: "#185948",
          100: "#185948",
          200: "#24856C",
          300: "#31B190",
          400: "#4CCEAC",
          500: "#6CD7BB",
          600: "#8CE0CA",
          700: "#ACE8D9",
          800: "#CCF1E7",
          900: "#DCF5EF"
        },
        redAccent: {
          DEFAULT: "#DB4F4A",
          0: "#681815",
          100: "#681815",
          200: "#97221E",
          300: "#C62D27",
          400: "#DB4F4A",
          500: "#E2706C",
          600: "#E9918E",
          700: "#EFB2B0",
          800: "#F6D3D2",
          900: "#F9E4E3"
        },
        blueAccent: {
          DEFAULT: "#6870FA",
          0: "#040B7D",
          100: "#060FB4",
          200: "#0814EA",
          300: "#323DF8",
          400: "#6870FA",
          500: "#8F95FB",
          600: "#B7BBFD",
          700: "#DEE0FE",
          800: "#FFFFFF",
          900: "#FFFFFF"
        }
      })
});

// theme setting for mui
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500]
            },
            secondary: {
              main: colors.greenAccent[500]
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100]
            },
            background: {
              default: colors.primary[500]
            }
          }
        : {
            primary: {
              main: colors.primary[100]
            },
            secondary: {
              main: colors.greenAccent[500]
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100]
            },
            background: {
              dafault: "#fcfcf"
            }
          })
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14
      }
    }
  };
};

// contextof for the color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light"))
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
