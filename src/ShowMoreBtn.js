// function showMore(){
//     const x = document.getElementsByClassName("box-paragraph");
//         if (x.style === "hidden") {
//             x.style = "block";
//         } else {
//             x.style = "none";   
//         }
//         console.log("bananas")
//     };

function showMore() {
    // const dots = document.getElementsByClassName("dots");
    const dots = document.getElementById("dots")
    const moreText = document.getElementsByClassName("more");
    // document.getElementsByClassName('dots')[0].style.display 
    const btnText = document.getElementsByClassName("showMoreBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.innerHTML = "Read more";
      btnText.style.display = "none";
    } else {
      dots.style.display = "none";
      moreText.innerHTML = "Read less";
      btnText.style.display = "inline";
    }
  }

export default function ShowMoreBtn(){

    return(
        <div>
            <button onClick={showMore} className="showMoreBtn">Read More</button>
        </div>

    )
}