module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    indentation: 4, //4空格
    'selector-class-pattern':
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
    // at-rule-no-unknown: 屏蔽一些scss等语法检查
    'at-rule-no-unknown': [true, { ignoreAtRules: ['mixin', 'extend', 'content', 'export', 'unocss-placeholder'] }],
    // css-next :global
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep'],
      },
    ],
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
  },
}
