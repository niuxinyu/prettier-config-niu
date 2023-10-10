const likeBuiltInModules = [
  '^vue$',
  '^vue-router$',
  '^vuex$',
  '^pinia$',
  '^react$',
  '^react-dom$',
  '^react-router-dom$',
  '^node:.*$',
]

// style
const cssList = ['^[.@](.*)(css|less|scss|sass)$']

module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  quoteProps: 'as-needed',
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  requirePragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'ignore',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  importOrder: [
    ...likeBuiltInModules,
    '<THIRD_PARTY_MODULES>',
    // ...v2UiList,
    // ...uiList,
    // @ 开头的第三方包
    // '^@[^/](.*)$',
    // 第三方包的样式文件
    '^@[^/](.*)(css|less|scss|sass)$',
    // 第三方包的样式文件
    '^[^@/.](.*)(css|less|scss|sass)$',
    // 针对 node 项目中的 src 开头的本地包
    '^src.*$',
    // 路径别名包 排除 css 文件
    '^@/(?!.*.(css|less|scss|sass|styl)$).*$',
    // 相对路径包
    '^[./](?!.*.(css|less|scss|sass|styl)$).*$',
    ...cssList,
  ],
  importOrderSeparation: true,
  overrides: [
    {
      files: ['**/*.(css|less|scss|sass|styl)', '**/*.html'],
      // files: ['**/*.css', '**/*.html'],
      singleQuote: false,
    },
  ],
}
