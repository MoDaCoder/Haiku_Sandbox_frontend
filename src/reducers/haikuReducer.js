export default function haikuReducer(state, action){
    // debugger
    switch(action.type){
        case "FETCH_HAIKUS":
            return {
                haikus: action.payload
            }
        case "ADD_HAIKU":
            return {
                haikus: [...state.haikus, action.payload]
            }
        case "DELETE_HAIKU":
                const newHaiku = state.haikus.filter(haiku => haiku.id !== action.payload)
                return {
                    haikus: newHaiku
                }
        case "EDIT_HAIKU":       
        // debugger
            // const editHaiku = state.haikus.map(haiku => haiku.id === action.payload.id ? action.payload : haiku)
            const editHaiku = state.haikus.map(haiku => haiku.id === parseInt(action.payload.id) ? action.payload : haiku)
            return {
                haikus: editHaiku
            }
        default:
            return state
    }
}