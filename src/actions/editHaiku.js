export default function editHaiku(haiku){
    return (dispatch) => {
        const options = {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({haiku})
        }
        fetch(`http://localhost:3000/haikus/${haiku.id}`, options)
        .then(res => res.json())
        .then(haiku => {
            dispatch({type: "EDIT_LIST", payload: haiku})
        })
    }
}