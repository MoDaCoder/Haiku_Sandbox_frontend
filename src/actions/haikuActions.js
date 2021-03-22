export function fetchHaikus(haikus){
    return (dispatch) => {
        console.log('c')
        fetch(`http://localhost:3000/haikus`)
        .then(res => res.json())
        .then(haikus => { console.log('d')
            dispatch({type: "FETCH_HAIKUS", payload: haikus})
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
            dispatch({type: "ADD_HAIKU", payload: haiku})
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
            dispatch({type: "EDIT_HAIKU", payload: haiku})
            // dispatch({type: "EDIT_HAIKU", payload: haiku.data})
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