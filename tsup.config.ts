import type { Options } from "tsup";

const env = process.env.NODE_ENV;

export const tsup: Options = {
  sourcemap: true,
  clean: true, // rimraf dist
  dts: true, // generate dts file for main module
  format: ["cjs", "esm"], // generate cjs and esm files
  minify: env === "production",
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
  watch: env === "development",
  target: "es2020",
  outDir: env === "production" ? "dist" : "lib",
  entry: ["src/**/*.ts"],
};

export default tsup;
