module.exports = {
  root: true,
  extends: '@felipstein/eslint-config-react',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'jsx-a11y/no-autofocus': 'off',
  },
};
