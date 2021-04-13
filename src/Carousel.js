
const image1="images/image1.jpeg";
const image2="images/image2.jpg";
const image3="images/image3.jpeg";
const imageWidth={"height":"250px"}
function Carousel(){
    return (
        <>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div style={imageWidth} className="carousel-item active">
                <img src={image1} className="d-block w-100" alt="..."/>
                </div>
                <div style={imageWidth} className="carousel-item">
                <img src={image2} className="d-block w-100" alt="..."/>
                </div>
                <div style={imageWidth} className="carousel-item">
                <img src={image3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>

        </>
    );
}

export default Carousel;