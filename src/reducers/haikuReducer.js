export default function haikuReducer(state, action){
    switch(action.type){
        case "FETCH_HAIKUS":
            return {
                haikus: action.payload
            }
        case "ADD_HAIKU":
            return {
                haikus: [...state.lists, action.payload]
            }
//         case "DELETE_HAIKU":
//                 const newHaiku = state.haikus.filter(haiku => haiku.id !== action.payload)
//                 return {
//                     haikus: newHaiku
//                 }
//         case "EDIT_HAIKU":
//             const editHaiku = state.haikus.map(haiku => haiku.id === action.payload.id ? action.payload : haiku)
//             return {
//                 haikus: editHaiku
//             }
        default:
            return state
    }
}