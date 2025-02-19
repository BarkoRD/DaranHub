import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    extends: ['plugin:prettier/recommended'],
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'semi': ['error', 'never'], // No usar punto y coma
      'quotes': ['error', 'single'], // Usar comillas simples
      'indent': ['error', 2], // Indentación de 2 espacios
      'no-unused-vars': 'warn', // Advertir sobre variables no usadas
      'no-console': 'warn', // Advertir sobre el uso de console.log
      'space-before-function-paren': ['error', 'always'], // Espacio antes de los paréntesis de función
      'keyword-spacing': ['error', { before: true, after: true }], // Espacio antes y después de palabras clave
      'object-curly-spacing': ['error', 'always'], // Espacio dentro de llaves
      'array-bracket-spacing': ['error', 'never'], // Sin espacio dentro de corchetes
      'no-multiple-empty-lines': ['error', { max: 1 }], // Máximo una línea vacía
      'eol-last': ['error', 'always'], // Nueva línea al final del archivo
      'no-trailing-spaces': 'error', // Sin espacios al final de las líneas
      'eqeqeq': ['error', 'always'], // Usar siempre === y !==
    },
  },
]
