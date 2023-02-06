const path = require('path'); //Requerimos path que ya esta instalada
const HtmlWebpackPlugin = require('html-webpack-plugin') //Requerimos el plugin instalado de html
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = { // añadimos los módulos
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'), // traemos el path que traemos al comienzo para usar resolve, que sirve para que localice la carpeta dist de output
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js'],// Agregamos que tipo de extenciones manejara webpack IMPORTANTE
    },
    module: {
        rules: [
          {
            // Test declara que extensión de archivos aplicara el loader
            test: /\.js$/,
            // Exclude permite omitir archivos o carpetas especificas
            exclude: /node_modules/,
            // Use es un arreglo u objeto donde dices que loader aplicaras
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.(css|styl)$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "stylus-loader"
            ]
          },
        ]
      },
      // SECCION DE PLUGINS
    plugins: [
        new HtmlWebpackPlugin({ // CONFIGURACIÓN DEL PLUGIN
            inject: true, // INYECTA EL BUNDLE AL TEMPLATE HTML
            template: './public/index.html', // LA RUTA AL TEMPLATE HTML
            filename: './index.html' // NOMBRE FINAL DEL ARCHIVO
        }),
        new MiniCssExtractPlugin(),
    ]
}