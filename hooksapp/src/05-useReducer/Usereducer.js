

const initialState = [{
    id:1,
    todo:'recolectar la piedra',
    done:false
}]

const todoReducer = (state = initialState,action ={}) => {
    switch (action.type) {
        case 'agregar':
           const add = [...state,action.payload]
           return add
        default:
            break;
    }
    return state
}

let todos = todoReducer()


const newTodo = [{
    id:2,
    todo:'recolectar la piedra filosofal de harry pother',
    done:false
}]
const addTodoaction = {
    type:'agregar',
    payload:newTodo
}

todos =  todoReducer(todos,addTodoaction)
console.log(todos);