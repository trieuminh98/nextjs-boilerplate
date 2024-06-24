const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/node'),
  ],
  rules: {
    'import/no-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'eslint-comments/require-description': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-unused-vars': 'off',
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
