import {
  Theme as MUITheme,
  ThemeOptions as MUIThemeOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    accent: {
      main: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    accent?: {
      main?: string;
    };
  }
  export function createTheme(options?: ThemeOptions): Theme;
}
