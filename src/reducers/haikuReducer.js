export default function haikuReducer(state, action){
    // debugger
    switch(action.type){
        case "FETCH_HAIKUS":
            return {
                haikus: action.payload
            }
        case "ADD_HAIKU":
            // debugger
            return {
                haikus: [...state.haikus, action.payload]
            }
        case "DELETE_HAIKU":
                const newHaiku = state.haikus.filter(haiku => haiku.id !== action.payload)
                return {
                    haikus: newHaiku
                }
        case "EDIT_HAIKU":
            const editHaiku = state.haikus.map(haiku => haiku.id === action.payload.id ? action.payload : haiku)
            return editHaiku
            // return {
            //     haikus: editHaiku
            // }

        //IT STILL WORKS... BUT WHY? lol
            //     case "EDIT_HAIKU":
            // const editHaiku = state.haikus.map(haiku => haiku.id === action.payload.id ? action.payload : haiku)
            // return {
            //     ...state,
            //     haikus: {
            //         ...state,
            //         editHaiku
            //     }
            // }
        default:
            return state
    }
}