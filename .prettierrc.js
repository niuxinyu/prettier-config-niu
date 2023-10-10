// v2
const v2UiList = ['element-ui']
// v3
const uiList = ['ant-design-vue', 'element-plus', 'naive-ui', 'view-ui-plus']

// style
const cssList = ['^[.@](.*)(css|less|scss|sass)$']

module.exports = {
	plugins: ['@trivago/prettier-plugin-sort-imports'],
	printWidth: 100,
	tabWidth: 2,
	useTabs: true,
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
		'<THIRD_PARTY_MODULES>',
		...v2UiList,
		...uiList,
		// @ 开头的第三方包
		'^@[^/](.*)$',
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
