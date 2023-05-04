export const initialState = {
    status:'verificando', //estado de la autenticacion
    uid:null, //id user
    email:null, //email user
    displayname:null,
    photoUrl:null,
    mensajeserror:null
}

export const authenticateState = {
    status:'autenticado', //estado de la autenticacion
    uid:'123', //id user
    email:'rinel@demo.com', //email user
    displayname:'rinel',
    photoUrl:'http://demo.jpg',
    mensajeserror:null
}
