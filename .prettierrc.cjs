module.exports = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss"
  ],
  semi: false,
  trailingComma: "none",
  printWidth: 100,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    },
    {
      files: "tailwind.config.ts",
      options: {
        printWidth: 180
      }
    }
  ]
}
