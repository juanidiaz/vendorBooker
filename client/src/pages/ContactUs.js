import React, { Component } from 'react';

const styles = {
    image: {
        width: "100%", 
        marginBottom: "30px", 
        border: "1px solid #021a40", 
        padding: "1px", 
        borderRadius: "7px", 
        marginLeft: "auto",
        marginRight: "auto"
    },
    smallContent: {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto"
    }
}


class ContactUs extends Component {
    render() {
        return (
            <div className="container" style={{ marginTop: "40px",  }}>
                <div className="row" style={{ background: "white", borderRadius: "10px"}}>
                    <div className="col-md-12" >
                        <h1 style={{ textAlign: "center", paddingTop: "30px", fontWeight: "bolder" }}>Contact Us</h1>
                        <hr></hr>
                        <br></br>
                    </div>
                    <div className="col-md-4" style={{marginLeft: "30px", marginBottom: "30px", marginRight: "40px", textAlign: "center"}}>

                        <h3 style={ styles.smallContent }><i className="fas fa-phone-square" style={{ marginRight: "10px" }}></i><b> Phone</b>  </h3>
                        <h5 style={ styles.smallContent }>905 878-9009 / 905 878-5557</h5><br></br>
                        <h3 style={ styles.smallContent }><i className="fas fa-map-marker-alt" style={{ marginRight: "10px" }}></i><b> Address</b> </h3>
                        <h6 style={ styles.smallContent }>724 Main St E <br></br>
                            Milton, ON <br></br>
                            L9T 3P6</h6><br></br>
                        <h3 style={ styles.smallContent }><i className="fas fa-envelope" style={{ marginRight: "10px" }}></i><b> Email</b></h3>
                        <a href="mailto: amazingpetgroomingmilton@gmail.com"><h6><i>amazingpetgroomingmilton@gmail.com</i></h6></a>
                    </div>
                    <div className="col-md-6">
                      <a href="https://www.google.com/maps/place/Amazing+Pet+Grooming/@43.5239754,-79.8731451,17z/data=!3m1!4b1!4m5!3m4!1s0x882b6f0649aa7edb:0xa1616d6c9e9e1545!8m2!3d43.5239754!4d-79.8709564?hl=en-CA" target="blank">  
                      <img style={ styles.image } 
                        alt="gooogle Map" src="https://res.cloudinary.com/bootcamp2019/image/upload/v1556559547/GoogleMap.png"></img></a>
                    </div>
                    <div className="col-md-12">
                    <hr></hr>
                    <p style={{ textAlign: "center", fontSize: "20px" }}>Connect with us <a href="https://www.facebook.com/amazingpetgroomingmilton/" target="blank"><img style={{ width: "35px", marginLeft: "10px" }} alt="Facebook Logo" src="./images/facebook_circle.png"></img></a><a href="https://search.google.com/local/writereview?placeid=ChIJ236qSQZvK4gRRRWenmxtYaE" target="blank"><img style={{ width: "35px", marginLeft: "10px" }} alt="google Logo" src="./images/google-icon-circle.png"></img></a><a href="https://search.google.com/local/writereview?placeid=ChIJ236qSQZvK4gRRRWenmxtYaE" target="blank"><img style={{ width: "35px", marginLeft: "10px" }} alt="Twitter Logo" src="./images/Twitter-icon.png"></img></a><a href="https://search.google.com/local/writereview?placeid=ChIJ236qSQZvK4gRRRWenmxtYaE" target="blank"><img style={{ width: "35px", marginLeft: "10px" }} alt="google Logo" src="./images/instagram-icon.png"></img></a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;