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


