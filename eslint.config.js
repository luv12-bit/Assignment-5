import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

// This file configures ESLint to help find and fix problems in the code
export default defineConfig([
  // Tell ESLint to ignore the build folder (dist)
  globalIgnores(['dist']),
  {
    // Apply these rules to all .js and .jsx files
    files: ['**/*.{js,jsx}'],
    extends: [
      // Use standard recommended rules for JavaScript
      js.configs.recommended,
      // Add rules specific to React Hooks (like checking dependency arrays)
      reactHooks.configs.flat.recommended,
      // Add rules for Vite's fast refresh functionality
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      // Define global variables for the browser environment
      globals: globals.browser,
      // Enable JSX parsing support
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
