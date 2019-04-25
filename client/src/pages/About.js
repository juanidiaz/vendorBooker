import React from "react";
import Background from "../components/Background";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Slider from "../components/Slider";

    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500
    };

function About() {
  return (
    <div>
      <Background>
      <img src="/images/logo_300.png" style={{ width: "200px" }} alt="main logo" />
      </Background>
  
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About us</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              With over 19 years of experience, you can be sure that your dogs and cats are in good hands. 
            </p>
            <p>
            Our open concept allows you to watch your dog and/or cat being pampered by looking through our windows at any time. 
            Our environment provides your pets a unique experience where stress from all other pet groomers will simply go away. 
            Your furry members of the family are just as happy coming in, as they are going home.
            </p>
          </Col>
        </Row>
        <Slider {...settings}>
        <div>
          <h3>BATHING</h3>
          <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/bathingDog.jpg" style={{ width: "200px" }}/>
         
        </div>
        <div>
          <h3>BRUSHING</h3>
          <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/dryingDog.jpg" style={{ width: "200px" }}/>
        </div>
        <div>
          <h3>DE-MATTING</h3>
          <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/demattingDog.jpg" style={{ width: "200px" }}/>
        </div>
        <div>
          <h3>EAR CLEANING</h3>
          <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/earCleaning.jpg" style={{ width: "200px" }}/>
        </div>
        <div>
          <h3>HAIRCUTS</h3>
          <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/haircutImg.jpg" style={{ width: "200px" }}/>
        </div>
        <div>
          <h3>NAIL TRIMMING</h3>
          <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/nailTrim.jpg" style={{ width: "200px" }}/>
        </div>
      </Slider>
      </Container>
    </div>
  );
}

export default About;