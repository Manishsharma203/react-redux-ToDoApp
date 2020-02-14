import {ADD_TODO ,TOGGLE, DELETE, UPDATE} from './actions'

var initialState={
    todoList:[]
}

export const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            let newTodoList = state.todoList
            for(let i=0;i<newTodoList.length;i++){
                if(newTodoList[i].itemName==action.payload.itemName){
                    newTodoList[i]=action.payload
                    return {...state, todoList:[...newTodoList]}
                }
            }
            return {...state, todoList:[...newTodoList,action.payload]}
        case TOGGLE:
            let newTodoList2 = state.todoList
            let updatedTodo= newTodoList2.map(e=>e.itemName===action.payload.itemName?{...e,completed:!e.completed}:e)
            return {...state, todoList:updatedTodo}
        case DELETE:
            let newTodoList3 = state.todoList
            let deletedList = newTodoList3.filter(e=>e.itemName!=action.payload.itemName)
            return {...state, todoList:deletedList}
        case UPDATE:
            console.log('action.payload',action.payload)
            let newTodoList4= state.todoList
            for(let j=0;j<newTodoList4.length;j++){
                if(newTodoList4[j].itemName==action.payload.itemName){
                    newTodoList4[j]=action.payload
                    return {...state,todoList:[...newTodoList4]}
                }
            }
            for(let j=0;j<newTodoList4.length;j++){
                if(newTodoList4[j].id==action.payload.id){
                    newTodoList4[j]=action.payload
                    return {...state,todoList:[...newTodoList4]}
                }
            }
        default:
            return state
    }
}

