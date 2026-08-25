import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'storybook-static', 'e2e/**/*-snapshots/**'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Catches the `href="#"` and `<div onClick>` patterns this codebase had.
      'no-script-url': 'error',
    },
  },
  {
    /*
     * shadcn primitives intentionally export a `cva` variant builder alongside
     * their component (`buttonVariants`, `badgeVariants`), and ToastProvider
     * exports its `useToast` hook. `allowConstantExport` doesn't cover a
     * function-call result, so the rule fires on the library's own convention.
     */
    files: [
      'src/components/ui/button.tsx',
      'src/components/ui/badge.tsx',
      'src/components/ui/Toast/ToastProvider.tsx',
    ],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    // Playwright specs run in Node, not the browser.
    files: ['e2e/**/*.ts', '*.config.ts'],
    languageOptions: { globals: globals.node },
  },
)
