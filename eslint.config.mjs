import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import importX, { createNodeResolver } from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import promise from 'eslint-plugin-promise';
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

// Flat-config migration of the former .eslintrc.js. Ordering matters: shared
// recommended configs come first, then the project's own rule overrides last so
// they win (mirroring how `rules` overrode `extends` under eslintrc).
export default tseslint.config(
  {
    ignores: [
      '**/*.d.ts',
      '**/.next/**',
      '**/build/**',
      '**/dist/**',
      '**/public/**',
      'packages/frontend/config/**',
      'packages/frontend/scripts/**',
    ],
  },

  // Project-wide settings applied to every linted file: React version detection
  // and the import-x module-resolution chain (TypeScript resolver for
  // tsconfig-aware paths + @types, falling back to import-x's node resolver for
  // bare/builtin specifiers). Replaces the old `plugin:import/typescript` setup.
  {
    settings: {
      react: { version: 'detect' },
      'import-x/extensions': ['.ts', '.tsx', '.js', '.jsx'],
      'import-x/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          noWarnOnMultipleProjects: true,
          project: ['packages/frontend/tsconfig.json', 'scripts/tsconfig.json'],
        }),
        createNodeResolver(),
      ],
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  importX.flatConfigs.errors,
  promise.configs['flat/recommended'],
  react.configs.flat.recommended,
  prettierRecommended,

  // CommonJS config files (e.g. prettier.config.js) need Node globals so
  // `module.exports` isn't flagged by no-undef.
  {
    files: ['**/*.{js,cjs}'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },

  // The project's own rule set, applied to the TypeScript sources.
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      '@eslint-community/eslint-comments': eslintComments,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // react / react-hooks (only the two rules the project has always enforced;
      // react-hooks v7 ships many new opinionated rules we deliberately don't opt into)
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': ['error', { skipUndeclared: true }],
      'react/no-unused-prop-types': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/no-unknown-property': 'off',

      // eslint-comments (recommended set from the @eslint-community fork + the
      // project's extra no-unused-disable)
      '@eslint-community/eslint-comments/disable-enable-pair': 'error',
      '@eslint-community/eslint-comments/no-aggregating-enable': 'error',
      '@eslint-community/eslint-comments/no-duplicate-disable': 'error',
      '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
      '@eslint-community/eslint-comments/no-unused-enable': 'error',
      '@eslint-community/eslint-comments/no-unused-disable': 'error',

      // core rules
      'array-callback-return': 'error',
      camelcase: 'error',
      'class-methods-use-this': 'error',
      'default-case': 'error',
      'dot-notation': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'global-require': 'error',
      'handle-callback-err': 'error',
      'no-array-constructor': 'error',
      'no-buffer-constructor': 'error',
      'no-console': 'error',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-eval': 'error',
      'no-extra-bind': 'error',
      'no-floating-decimal': 'error',
      'no-implicit-coercion': 'error',
      'no-implied-eval': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-nested-ternary': 'error',
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-new-require': 'error',
      'no-new-wrappers': 'error',
      'no-new': 'error',
      'no-param-reassign': ['error', { props: true }],
      'no-path-concat': 'error',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-proto': 'error',
      'no-return-assign': 'error',
      'no-return-await': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow-restricted-names': 'error',
      'no-shadow': 'error',
      'no-undef': ['error', { typeof: true }],
      'no-undef-init': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'no-with': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'prettier/prettier': 'error',
      'require-await': 'error',
      strict: 0,
      yoda: ['error', 'never'],

      // import (eslint-plugin-import-x)
      'import-x/no-deprecated': 'error',
      'import-x/no-dynamic-require': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-useless-path-segments': 'error',
      'import-x/no-unused-modules': 'error',
      'import-x/no-extraneous-dependencies': 'error',
      'import-x/first': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/extensions': 'error',
      'import-x/no-unresolved': ['error', { ignore: ['@date-io/type'] }],
      'import-x/named': 'off',
      'import-x/order': ['error', { 'newlines-between': 'always' }],

      // typescript-eslint
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  }
);
