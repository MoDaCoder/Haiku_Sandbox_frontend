export default function HaikuReducer(state, action){
    switch(action.type){
        case "Fetch_Haiku":
            return {
                haikus: action.payload
            }
        case "Add_Haiku":
            return {
                haikus: [...state.lists, action.payload]
            }
        case "Delete_Haiku":
                const newHaiku = state.haikus.filter(haiku => haiku.id !== action.payload)
                return {
                    haikus: newHaiku
                }
        case "Edit_Haiku":
            const editHaiku = state.haikus.map(haiku => haiku.id === action.payload.id ? action.payload : haiku)
            return {
                haikus: editHaiku
            }
        default:
            return state
    }
}