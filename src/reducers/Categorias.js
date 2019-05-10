const ADD_CATEGORY = 'category/add'

/**
 * id
 * nombre
 */
const addCategory = payload => ({
  type: ADD_CATEGORY,
  payload: {
    ...payload,
    id: Math.random().toString(36),
  }
})

const initialState ={
  data: [{id: 1, name: 'Defecto'}]
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case ADD_CATEGORY:
      return{
        ...state,
        data: [...state.data, action.payload]
      }
  
    default:
      return state
  }
}