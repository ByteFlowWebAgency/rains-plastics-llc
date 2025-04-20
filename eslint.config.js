const js = require('@eslint/js')
const globals = require('globals')
const vue = require('eslint-plugin-vue')

module.exports = [
  js.configs.recommended,
  {
    ignores: ['dist/**', '.quasar/**', 'node_modules/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    rules: {
      'prefer-promise-reject-errors': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
  {
    files: ['**/*.vue'],
    plugins: {
      vue,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: require('vue-eslint-parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...vue.configs.base.rules,
      ...vue.configs['vue3-recommended'].rules,
      'vue/multi-word-component-names': 'off',
      'vue/attributes-order': [
        'error',
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT',
          ],
          alphabetical: false,
        },
      ],
      'vue/comment-directive': 'off',
    },
  },
]
