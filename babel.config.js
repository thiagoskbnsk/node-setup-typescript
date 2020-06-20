module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@controllers': './src/app/controllers',
        '@models': './src/app/models',
        '@config': './src/config',
        '@exceptions': './src/app/exceptions',
        '@services': './src/app/services',
        '@validators': './src/app/validators',
        '@middlewares': './src/app/middlewares',
        '@interfaces': './src/app/interfaces',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
