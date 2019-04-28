import React, { Component } from "react";
import Background from "../components/Background";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import Slider from "../components/Slider";
// import API from "../utils/API";

const settings = {
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500
};

class Home extends Component {
  state = {
    services: [],
  };
  

render() {
  return (
    <div>
      <Background backgroundImage="http://amazingpetgrooming.ca/wp-content/uploads/2016/11/perro-secandose.jpg">
      </Background>

      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Our Services Stand Apart</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
    
            <Slider {...settings}>
           <div>
              <h4>Bathing</h4>
              <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/bathingDog.jpg" alt="bathing" style={{ height:"120px", width: "120px" }}/>
            </div>
            <div>
              <h4>Drying</h4>
              <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/dryingDog.jpg" alt="drying" style={{ height:"120px", width: "15git 0px"  }}/>
            </div>
            <div>
              <h4>De-matting</h4>
              <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/demattingDog.jpg" alt="de-matting" style={{ height:"120px", width: "150px"  }}/>
            </div>
            <div>
              <h4>Ear Cleaning</h4>
              <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/earCleaning.jpg" alt="earcleaning" style={{ height:"120px", width: "150px"  }}/>
            </div>
            <div>
              <h4>Haircuts</h4>
              <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/haircutImg.jpg" alt="ear cleaning" style={{ height:"120px", width: "150px"  }}/>
            </div>
            <div>
              <h4>Nail Trimming</h4>
              <img src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/nailTrim.jpg" alt="nail trimming" style={{ height:"120px", width: "150px" }}/>
            </div>
          </Slider>
          </Col>
        </Row>

      </Container>
    </div>
    );
  }
}
export default Home;
