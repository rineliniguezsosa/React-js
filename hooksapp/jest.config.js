module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    //especificamos el testEnviroment para el entorno de prueba
    setupFiles:['./jest.setup.js']
    //descripcion setupFiles Una lista de rutas a módulos que ejecutan algún código para configurar o configurar el entorno de prueba.
}