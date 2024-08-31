/* eslint-disable no-undef */
const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  root: false,
  env: { browser: true, es2020: true },
  settings: { react: { version: 'detect' } },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', '@typescript-eslint', 'simple-import-sort', '@emotion'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': OFF,
    '@typescript-eslint/no-non-null-assertion': OFF,
    '@typescript-eslint/no-explicit-any': ERROR,
    '@typescript-eslint/object-curly-spacing': [ERROR, 'always'],
    '@typescript-eslint/space-infix-ops': ERROR,
    '@typescript-eslint/type-annotation-spacing': ERROR,
    '@typescript-eslint/comma-dangle': OFF,
    '@typescript-eslint/indent': [WARN, 2],
    '@typescript-eslint/member-delimiter-style': ERROR,
    '@typescript-eslint/no-unsafe-call': OFF,
    '@typescript-eslint/no-unsafe-return': OFF,
    '@typescript-eslint/no-unsafe-argument': OFF,
    '@typescript-eslint/no-unsafe-assignment': OFF,
    '@typescript-eslint/no-unsafe-member-access': OFF,
    '@typescript-eslint/no-misused-promises': [
      ERROR,
      { 'checksVoidReturn': false }
    ],
    '@typescript-eslint/no-floating-promises': OFF,
    'react/jsx-tag-spacing': [ERROR, {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never'
    }],
    'react/jsx-first-prop-new-line': [WARN, 'multiline'],
    'react/jsx-max-props-per-line': [WARN, { 'maximum': { 'single': 3, 'multi': 3 } }],
    'react/jsx-indent-props': ['WARN', 2],
    'react/jsx-curly-brace-presence': WARN,
    'react/jsx-wrap-multilines': [WARN, { return: 'parens-new-line' }],
    'react/react-in-jsx-scope': OFF,
    'simple-import-sort/imports': WARN,
    'space-in-parens': WARN,
    'simple-import-sort/exports': WARN,
    'key-spacing': ERROR,
    'arrow-spacing': ERROR,
    'keyword-spacing': ERROR,
    'block-spacing': ERROR,
    'comma-spacing': ERROR,
    'implicit-arrow-linebreak': ERROR,
    'quotes': [ERROR, 'single'],
    'no-trailing-spaces': ERROR,
    'array-bracket-spacing': ERROR,
    'semi': [ERROR, 'never'],
    'no-multi-spaces': ERROR,
    'no-multiple-empty-lines': [WARN, {
      'max': 1,
      'maxBOF': 1
    }],
    'arrow-parens': ['error', 'always'],
    'object-curly-newline': ['error', { 'multiline': true, 'minProperties': 5 }],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/no-unescaped-entities': OFF,
    'lint/style/useSelfClosingElements': OFF
  },
}
