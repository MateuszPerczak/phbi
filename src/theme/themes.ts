import type { Theme } from "@emotion/react";

export enum ColorThemes {
  Light = "light",
  Dark = "dark",
}

type Themes = Record<ColorThemes, Theme>;

const themes: Themes = {
  light: {
    background: "#fff",
    color: "#1a1a1a",
  },
  dark: {
    background: "#535663",
    color: "#fff",
  },
};

export default themes;
