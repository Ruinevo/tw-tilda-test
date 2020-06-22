module.exports = {
  root: true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential",
    "@vue/standard"
  ],
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'semi': 0,
    'no-return-assign': 0,
    "template-curly-spacing": "off",
    "indent": ["error", 2, {
      "ignoredNodes": ["TemplateLiteral"]
    }]
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "parser": "babel-eslint"
  }
}

