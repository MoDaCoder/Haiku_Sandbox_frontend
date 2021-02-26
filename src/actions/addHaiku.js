export default function addHaiku(haiku){
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
        .then(list => {
            dispatch({type: "ADD_LIST", payload: list})
        })
    }
}