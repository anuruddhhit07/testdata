import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: {
    sourcemap:false,
    dir: "dist",
    format: "es",
    name: "ohlctestdata",
  },
  plugins: [typescript({ tsconfig: "tsconfig.json" })],
  external:["@ixjb94/indicators"]
});