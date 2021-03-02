export function fetchHaikus(haikus){
    return (dispatch) => {
        fetch(`http://localhost:3000/haikus`)
        .then(res => res.json)
        .then(haikus => {
            dispatch({type: "FETCH_HAIKUS", payload: haikus.data})
            // dispatch({type: "FETCH_HAIKUS", payload: haikus})
        })
    }
}

export function addHaiku(haiku){
    return (dispatch) => {
        const options = {
            method: "POST", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({haiku})
        }

        fetch(`http://localhost:3000/haikus`, options)
        .then(res => res.json())
        .then(haiku => {
            dispatch({type: "ADD_LIST", payload: haiku.data})
            // dispatch({type: "ADD_LIST", payload: haiku.data})
        })
    }
}

export function editHaiku(haiku){
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
            dispatch({type: "EDIT_LIST", payload: haiku.data})
        })
    }
}

export function deleteHaiku(haikuId){
    return (dispatch) => {
        const options = {
            method: "DELETE"
        }
        
        fetch(`http://localhost:3000/haikus/${haikuId}`, options)
        .then(res => res.json())
        .then(message => {
            dispatch({type: "DELETE_LIST", payload: haikuId})
        })
    }
}