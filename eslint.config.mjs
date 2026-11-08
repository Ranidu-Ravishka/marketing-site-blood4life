import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});
const config = compat.extends("next/core-web-vitals");
const finalConfig = [{ ignores: [".next/**", "node_modules/**", "tsconfig.tsbuildinfo"] }, ...config];

export default finalConfig;
