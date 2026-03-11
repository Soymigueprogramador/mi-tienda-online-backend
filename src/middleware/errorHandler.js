// Funcion para manejar los errores
const errorHandler = ( error, req, res, next ) => {
    // Stack del error
    console.error( error.stack );

    // Respuesta con el codigo de error
    /*
        El codigo 500 indica un error en el servidor.
        Ocurre cuando el servidor deja de funcionar
    */
    res.status( error.statuscode || 500 ).json({
        message: error.message || ' Ocurrio un error interno en el servidor '
    });
};

export default errorHandler;