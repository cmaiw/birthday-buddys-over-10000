import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }

        body {
          height: 100vh;
          width: 100vw;
          display: flex;
          margin: 0;
        }
      `}
    />
  );
}
