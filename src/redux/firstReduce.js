const initialState=[
  
]

export const ChnageTheNumber =(state=initialState,action)=>{
 switch(action.type){
    case"ADD-DATA":
    console.log([...state,action.payload])
        
        return (
            [...state,action.payload]
        )
    
    default:
        return state;
 }
}
