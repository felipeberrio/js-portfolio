# js-portfolio

1. Iniciamos la confiugración webpack con: npx webpack --mode development --config webpack.config.js
    Para hacer más amigable la ejecución del comando podemos crear un script de inicio en nuestro package.json build
    Lo utilizamos con: npm run build

2. Para dejar nuestro proyecto preparado para los diferentes navegadores que existen podemos utilizar babel loader en javascript
    instalamos las depencias como desarrollo con: npm install -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime
    Creamos el archivo de configuración de babel: .babelrc
    Añadimos la confiugración de babel a webpack.config.js
        Volvemos a correr el archivo con: npm run build

3. Instalamos el plugin de html en webpack para utilizarlo con: 
    npm i html-webpack-plugin -D y agregamos el plugin dentro de nuestra configuración webpack

4. Instalamos el paquete de css en webpack: y en nuestro archivo index.js añadimos la importación: import './styles/main.css';
    npm i mini-css-extract-plugin css-loader -D

                npm i -D node-sass sass-loader

                Añadimos el loader al arreglo de loaders y modificamos un poco la expresion regular

            {
                    test: /\.s?css$/,
                    use: [MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"]
                },

    Intalamos styluss: npm install stylus stylus-loader -D

5. Para copiar archivos con webpack: npm icopy-webpack-plugin -D

6. Para utilizar las rutas para las fonts usamos: npm install url-loader file-loader -D

7. Ya que cada vez que usamos npm run dev - run build ó demás nos crea nuevos archivos, para elinarlos utilizamos:
    Remove-Item -Force -Recurse -Path <ruta del directorio>
    Remove-Item -Force -Recurse -Path ./dist ; npm run build // Borramos la carpeta y la creamos con nuestro código

    Linux: rm -rf dist && npm run build

8. 