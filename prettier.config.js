/** @type {import("prettier").Config} */
const config = {
    tabWidth: 4,
    useTabs: false,
    bracketSpacing: true,
    bracketSameLine: false,
    overrides: [
        {
            files: ['*.js', '*.ts', '*.d.ts'],
            options: {
                semi: false,
                singleQuote: true,
                quoteProps: 'preserve',
                trailingComma: 'es5',
                arrowParens: 'always',
            },
        },
        {
            files: ['*.svelte'],
            options: {
                parser: 'svelte',
                svelteSortOrder: 'options-scripts-markup-styles',
                svelteStrictMode: false,
                svelteAllowShorthand: false,
                svelteIndentScriptAndStyle: true,
            },
        },
    ],
    plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
}

export default config
