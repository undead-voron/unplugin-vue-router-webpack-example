const { defineConfig } = require('@vue/cli-service')
const { VueRouterExports } = require('unplugin-vue-router')
const routerPlugin = require('unplugin-vue-router/webpack').default
const autoImport = require('unplugin-auto-import/webpack')
const path = require('path');

module.exports = defineConfig({
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      routerPlugin({
        routesFolder: 'src/pages',
      }),
      autoImport({
        imports: [
          {
            'vue-router/auto': VueRouterExports,
          },
        ],
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 8080,
    },
  },
})
