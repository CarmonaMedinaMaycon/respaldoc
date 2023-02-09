export const authReducer =(state = {}, action)=>{
switch (action.type) {
    case "LOGIN":
    return{
        ...action.payload, //los tres puntitos sirven para separar un arreglo u objetos
        isLogged: true,
    }    
    case "LOGOUT":
        return{
            isLogged:false,
        }
    default:
        return state
}
};