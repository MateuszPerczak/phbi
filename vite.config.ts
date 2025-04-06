import eslintPlugin from "@nabla/vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/phbi/",
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@routes": resolve(__dirname, "./src/routes"),
      "@pages": resolve(__dirname, "./src/pages"),
    },
  },
  build: {
    target: "esnext",
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion"],
      },
    }),
    svgr({
      svgrOptions: {
        icon: true,
        svgProps: {
          fill: "currentColor",
        },
      },
    }),
    eslintPlugin(),
  ],
});
