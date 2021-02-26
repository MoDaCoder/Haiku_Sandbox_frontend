export default function fetchHaikus(haikus){
    return (dispatch) => {
        fetch(`http://localhost:3000/haikus`)
        .then(res => res.json)
        .then(haikus => {
            dispatch({type: "FETCH_HAIKUS", payload: haikus})
        })
    }
}