/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    // 'plugin:vue/recommended' /* eslint应用在vue的必须配置 */,
    'plugin:prettier/recommended' /* 使用Prettier */
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': [2]
  }
}
