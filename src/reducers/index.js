const initialState = {
    items : [
      {id:1,description:"code", isDone:false},
      {id:2,description:"workout", isDone:false},
      {id:3,description:"watch a movie", isDone:false},
      {id:4,description:"draw a portrait", isDone:false}
    ],
    Filterstate:'all'
  };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state,items:[...state.items,action.payload]}
        case 'REMOVE':
            return {...state,items:[...state.items.filter(el=>el.id !== action.payload)]}
        case 'FILTER':
            return  {...state, Filterstate:action.payload}
        case 'EDIT':
            return {...state,items:[...state.items.map((el) => {
                if (el.id === action.payload.id) {
                  el.description = action.payload.newText;
                }
                return el;
              }) ]}
        case 'DONE':
            return  {...state,items:[...state.items.map(el=>{if(el.id===action.payload){
                el.isDone=!el.isDone
                console.log(el.isDone)
              } 
              return el })]}
        default: return state
    }
};

export default rootReducer;