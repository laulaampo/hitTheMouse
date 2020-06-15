// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  // “off”或0：不启用该规则。
  // “warn”或1：违反时警告。
  // “error”或2：违反时报错。
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": [2, "always"],
    "indent": [2, 4],                  // 缩进风格
    "eol-last": 0,                // 文件以换行符结束
    "no-new": 0,                  // 不允许new一个实例后不赋值或者不比较
    "one-var": 0,                 // 强制变量声明放在一起
    "no-cond-assign": 0,          // 条件语句的条件中不允许出现赋值运算符
    "no-tabs": 0,
    'no-mixed-spaces-and-tabs': 0,
  }
}
