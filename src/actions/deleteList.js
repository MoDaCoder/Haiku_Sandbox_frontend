export default function deleteHaiku(haikuId){
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