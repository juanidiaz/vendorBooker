import React, { Component } from "react";
import Background from "../components/Background";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import Slider from "../components/Slider";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import API from "../utils/API";

class Home extends Component {
  state = {
    services: [],
  };

  componentDidMount() {
    this.loadServices();
  }

  loadServices = () => {
    API.getServices()
      .then(res => this.setState({ services: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500
    };
  
  return (
    <div>
      <Background backgroundImage="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/08/16160339/akc-dog-grooming-at-home-729.jpg">
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
    
                  {this.state.services.map(service => (
                    <div className="col-auto d-none d-lg-block" key={service._id}>
                    <Card.Img variant="top" src={`/images/${service.images}`} alt="bathing" style={{  width: "170px" }} />
                    <Card.Body>
                      <Card.Title>{service.name}</Card.Title>
                      <Button variant="info" href="/services">More Info</Button>
                    </Card.Body>
                    </div>
                   ))
                }

            </Slider>
          </Col>
        </Row>

      </Container>
    </div>
    );
  }
}
export default Home;
