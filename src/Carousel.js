import React, { PureComponent } from 'react'
import haiku_origin from './images/haiku_origin.jpg'
import fridge_haiku from './images/fridge_haiku.jpg'
import bed_haiku from './images/bed_haiku.jpg'
import out_of_haiku from './images/out_of_haiku.jpg'

class Carousel extends PureComponent {

    render(){

        return(
            <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={haiku_origin} className="img-fluid" alt="haiku_origin"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>WELCOME TO HAIKU SANDBOX</h5><br></br>
                        <p>Manufacture Haikus</p>
                        <p>Or Destroy And Edit</p>
                        <p>To Blossom Something New</p>
                    </div>
                </div>
                <div className="carousel-item">
                <img src={fridge_haiku} className="img-fluid" alt="fridge_haiku"/>
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Example: 1</h5> */}
                    </div>
                </div>
            <div className="carousel-item">
            <img src={bed_haiku} className="img-fluid" alt="bed_haiku"/>
                <div className="carousel-caption d-none d-md-block">
                    {/* <h5>Example: 2</h5> */}
                </div>
            </div>
            <div className="carousel-item">
            <img src={out_of_haiku} className="img-fluid" alt="out_of_haiku"/>
                <div className="carousel-caption d-none d-md-block">
                    {/* <h5>Example: 3</h5> */}
                </div>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
            </div>
            </>
        )
    }
}

export default Carousel