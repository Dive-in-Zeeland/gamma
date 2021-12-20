const off = 'off',
  warn = 'warn',
  error = 'error';

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

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    }
  ],

  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],

  rules: {
    indent: [error, 2, { SwitchCase: 1 }],
    'linebreak-style': [2, 'unix'],
    quotes: [error, 'single', { avoidEscape: true }],
    semi: [error, 'always'],
    'no-empty-function': off,
    '@typescript-eslint/no-empty-function': off,
    'react/display-name': off,
    'react/prop-types': off,
    'prettier/prettier': [
      error,
      {
        bracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 80,
      },
    ],
    'no-restricted-imports': [
      error,
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
    '@typescript-eslint/no-unsafe-assignment': warn,
    '@typescript-eslint/no-unsafe-member-access': warn,
    '@typescript-eslint/no-unsafe-call': warn,
    '@typescript-eslint/no-unsafe-return': warn,
    '@typescript-eslint/no-unsafe-argument': warn,
    '@typescript-eslint/no-explicit-any': off,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [error],
  },
  
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {},
    },
  },
};
