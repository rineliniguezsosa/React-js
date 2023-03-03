module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    //especificamos el testEnviroment para el entorno de prueba
    transformIgnorePatterns: ["/node_modules/(?!query-string)/"], // transformIgnorePatterns opcion:permite la transpilacion de los modulos de node
}