// Funcion para manejar la asyncronizacion
const asyncHandler = (fn) => ( req, res, next ) => {
    // Promesas
    Promise.resolve( fn ( req, res, next ) )

    .catch(next);
};

export default asyncHandler;