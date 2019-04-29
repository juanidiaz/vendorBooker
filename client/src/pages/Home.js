import React, { Component } from "react";
import Background from "../components/Background";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import Slider from "../components/Slider";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/bathingDog.jpg" alt="bathing" style={{ height:"230px", width: "285px", padding: "1.5rem"}}/>
                <Card.Body>
                <Card.Title>Bathing</Card.Title>
                <Button variant="info" href="/services">More Info</Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/dryingDog.jpg" alt="bathing" style={{ height:"230", width: "285px", padding: "1.5rem"}}/>
                <Card.Body>
                <Card.Title>Drying and brushing</Card.Title>
                <Button variant="info" href="/services">More Info</Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/demattingDog.jpg" alt="bathing" style={{ height:"230px", width: "285px", padding: "1.5rem"}}/>
                <Card.Body>
                <Card.Title>De-tangle</Card.Title>
                <Button variant="info" href="/services">More Info</Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/earCleaning.jpg" alt="bathing" style={{ height:"230px", width: "285px", padding: "1.5rem"}}/>
                <Card.Body>
                <Card.Title>Ear cleaning</Card.Title>
                <Button variant="info" href="/services">More Info</Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/haircutImg.jpg" alt="bathing" style={{ height:"230px", width: "285px", padding: "1.5rem"}}/>
                <Card.Body>
                <Card.Title>Haircut</Card.Title>
                <Button variant="info" href="/services">More Info</Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/nailTrim.jpg" alt="bathing" style={{ height:"230px", width: "285px", padding: "1.5rem"}}/>
                <Card.Body>
                <Card.Title>Nail trimming</Card.Title>
                <Button variant="info" href="/services">More Info</Button>
                </Card.Body>
              </Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/teethCleaning.jpg" alt="bathing" style={{ height:"230px", width: "285px", padding: "1.5rem"}}/>
              <Card.Body>
              <Card.Title>Teeth clearning</Card.Title>
              <Button variant="info" href="/services">More Info</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://alexisyepes.github.io/amazingpetgrooming/assets/images/spaDog.jpg" alt="bathing" style={{ height:"230px", width: "285px", padding: "1.5rem"}}/>
            <Card.Body>
            <Card.Title>Spa packages</Card.Title>
            <Button variant="info" href="/services">More Info</Button>
            </Card.Body>
          </Card>
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
