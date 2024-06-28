/* eslint-disable no-undef */
const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  rules: {
    'import/no-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'eslint-comments/require-description': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'import/order': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNumber: true },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
  },
  parserOptions: {
    project,
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};
