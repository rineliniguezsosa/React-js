module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ], //convierte codigo de node a codigo legible
        [ '@babel/preset-react', { runtime: 'automatic' } ] 
        //decide el tiempo de ejecución,opcion automatic:auto importa las funciones a las que JSX transpila. classicno importa automáticamente nada.
    ],
};