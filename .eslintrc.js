'use strict';

module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.jsx'],
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      env: {
        browser: true,
        es6: true,
        node: true,
      },
      rules: {
        'no-restricted-globals': ['error', 'require'],
      },
    },
    {
      files: ['*.m?js'],
      parserOptions: { sourceType: 'module' },
      env: {
        es6: true,
        node: true,
        browser: true,
      },
    },
    {
      files: ['*.web.js'],
      env: { browser: true },
      rules: {
        'no-restricted-globals': ['error', 'require'],
      },
    },
  ],
  rules: {
    'strict': ['error', 'global'],
    'no-bitwise': 'off',
    'no-iterator': 'off',
    'global-require': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'curly': ['error', 'all'],
    'no-param-reassign': 'off',
    'arrow-parens': ['error', 'always'],
    'no-multi-assign': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'object-curly-newline': 'off',
    'prefer-const': ['error', { destructuring: 'all' }],
    'class-methods-use-this': 'off',
    'operator-linebreak': ['error', 'after'],
    'implicit-arrow-linebreak': 'off',
    'react/no-this-in-sfc': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
  globals: {
    WebAssembly: false,
    BigInt: false,
    BigInt64Array: false,
    BigUint64Array: false,
    URL: false,
    Atomics: false,
    SharedArrayBuffer: false,
    queueMicrotask: false,
  },
  plugins: [
    "react"
  ]
};
