prettier config for myself

```shell
pnpm install prettier @trivago/prettier-plugin-sort-imports -D
```

Create `.prettierrc.cjs`

```js
const config = require('@koalan/prettier-config')
module.exports = config
```
