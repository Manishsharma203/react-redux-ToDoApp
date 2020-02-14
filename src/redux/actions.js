//action types
export const ADD_TODO= 'ADD_TODO'
export const TOGGLE='TOGGLE'
export const DELETE='DELETE'
export const TOTAL='TOTAL'
export const UPDATE='UPDATE'

//actions
export const add=(payload)=>({
    type:ADD_TODO,
    payload:payload
})

export const toggle=(item)=>({
    type:TOGGLE,
    payload:{
        itemName:item
    }
})

export const del=(item)=>({
    type:DELETE,
    payload:{
        itemName:item
    }
})

export const update=(payload)=>({
    type:UPDATE,
    payload:payload
})

export const total=()=>({
    type:TOTAL
})


