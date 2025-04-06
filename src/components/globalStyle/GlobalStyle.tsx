import { css, Global, type Theme, useTheme } from "@emotion/react";
import { memo } from "react";

export const GlobalStyle = memo((): JSX.Element => {
  const { background, color }: Theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        button,
        a {
          &:focus-visible {
            outline: 2px solid #fff;
          }
        }
        html,
        body {
          height: 100%;
          scroll-behavior: smooth;
        }
        body {
          display: flex;
          font-family: "Poppins", sans-serif;
          flex-direction: column;
          background: ${background};
          color: ${color};
          font-optical-sizing: auto;
          font-style: normal;
        }
        #root {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
      `}
    />
  );
});

GlobalStyle.displayName = "GlobalStyle";
