const path = require('path'); //Requerimos path que ya esta instalada
const HtmlWebpackPlugin = require('html-webpack-plugin') //Requerimos el plugin instalado de html
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = { // añadimos los módulos
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'), // traemos el path que traemos al comienzo para usar resolve, que sirve para que localice la carpeta dist de output
        assetModuleFilename: 'assets/[hash][ext][query]'
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
          // Styles
          {
            test: /\.(css|styl)$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "stylus-loader"
            ]
          },
          // Images
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
            generator: {
              filename : 'assets/images/[hash][ext][query]',
            }
          },
          // Fonts
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
            generator: {
              filename : 'assets/fonts/[name][ext][query]',
            }
            // use:{
            //   loader: 'url-loader',
            //   options: {
            //     limit: 10000,
            //     mimetype: "aplication/font-woff",
            //     name: "[name].[ext]",
            //     outputPath: "./dist/assets/fonts/",
            //     publicPath: "./dist/assets/fonts/",
            //     esModele: false,
            //   }
            // }
          }
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
        // new CopyPlugin({
        //   patterns: [
        //     {
        //       from: path.resolve(__dirname, "src", "assets/images"),
        //       to: "assets/images"
        //     }
        //   ]
        // })
    ]
}