module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    'linebreak-style': [2, 'unix'],
    quotes: [2, 'single', { avoidEscape: true }],
    semi: [2, 'always'],
    'no-empty-function': 0,
    '@typescript-eslint/no-empty-function': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    'prettier/prettier': 2,
    'no-restricted-imports': [
      2,
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Use styled-components/native.',
          },
        ],
        patterns: ['!styled-components/native'],
      },
    ],
    '@typescript-eslint/no-unsafe-assignment': 1,
    '@typescript-eslint/no-unsafe-member-access': 1,
    '@typescript-eslint/no-unsafe-call': 1,
    '@typescript-eslint/no-unsafe-return': 1,
    '@typescript-eslint/no-unsafe-argument': 1,
  },
  ignorePatterns: ['src/devtools', 'babel.config.js', '__tests__', 'node_modules'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {},
    },
  },
};
