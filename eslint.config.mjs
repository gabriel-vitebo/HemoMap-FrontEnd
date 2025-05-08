// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Your custom configs here
  rules: {
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral *'],
        ObjectExpression: 'first',
        ArrayExpression: 'first',
        FunctionDeclaration: { parameters: 'first' },
        FunctionExpression: { parameters: 'first' },
        MemberExpression: 1,
        ImportDeclaration: 'first',
        flatTernaryExpressions: true,
      },
    ]
  },
})
