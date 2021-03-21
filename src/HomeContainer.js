import React, { PureComponent } from 'react'
import Carousel from "./Carousel"
// import ShowMoreBtn from "./ShowMoreBtn"

class HomeContainer extends PureComponent {

    render(){

        return(
            <>
            <Carousel />
            <div className="box">
                <div className="a">
                    <strong><h5>Haiku Origin</h5></strong> 
                    <p className="box-paragraph" >Haiku, unrhymed poetic form consisting of 17 syllables arranged in three lines of 5, 7, and 5 syllables respectively. The haiku first emerged in 
                    <span className="dots" id="dots">...</span><span className="more" id="more">Japanese literature during the 17th century, as a terse reaction to elaborate poetic traditions, though it did not become known by the name haiku until the 19th century.</span></p>
                    {/* <ShowMoreBtn />*/}
                </div>
                <div className="b">
                    <h5>Haiku Rules</h5>
                    <p className="box-paragraph">
                        <li>The entire poem consists of just three lines, with 17 syllables in total.</li>
                        <li>The first line is 5 syllables.</li>
                        <li>The second line is 7 syllables.</li>
                        <li>The third line is 5 syllables.</li>
                    </p>
                {/* <ShowMoreBtn />*/}
                </div>
            </div>
            </>
        )
    }
}

export default HomeContainer