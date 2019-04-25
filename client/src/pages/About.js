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
          <h4>Bathing</h4>
          <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/bathingDog.jpg" style={{ height:"120px", width: "120px" }}/>
         
        </div>
        <div>
          <h4>Drying</h4>
          <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/dryingDog.jpg" style={{ height:"120px", width: "150px"  }}/>
        </div>
        <div>
          <h4>De-matting</h4>
          <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/demattingDog.jpg" style={{ height:"120px", width: "150px"  }}/>
        </div>
        <div>
          <h4>Ear Cleaning</h4>
          <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/earCleaning.jpg" style={{ height:"120px", width: "150px"  }}/>
        </div>
        <div>
          <h4>Haircuts</h4>
          <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/haircutImg.jpg" style={{ height:"120px", width: "150px"  }}/>
        </div>
        <div>
          <h4>Nail Trimming</h4>
          <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/nailTrim.jpg" style={{ height:"120px", width: "150px" }}/>
        </div>
      </Slider>
      </Container>
    </div>
  );
}

export default About;