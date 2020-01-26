import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";
import serve from "rollup-plugin-serve";
import copy from "rollup-plugin-copy";

import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js"
  },
  watch: {
    chokidar: {
      usePolling: true,
      paths: "src/**"
    }
  },
  plugins: [
    typescript(),
    scss({
      output: "dist/bundle.css"
    }),
    terser(),
    copy({
      targets: [{ src: "src/static/**", dest: "dist" }]
    }),
    serve({
      open: true,
      contentBase: `dist`
    })
  ]
};
