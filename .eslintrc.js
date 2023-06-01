module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:i18next/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    ident: [2, 4],
    'react/jsx-filename-extensions': [
      2,
      { extensions: ['.js', '.jsx', 'tsx'] }
    ],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadows': 'off',
    'i18next/no-literal-string': ['error', { markupOnly: true }]
  },
  globals: {
    __IS_DEV__: true
  },
};
