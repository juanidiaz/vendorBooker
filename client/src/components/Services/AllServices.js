import React from 'react';
import { Col, Row, Container } from "../Grid";
import Button from "../Button";

export default (props) => {
  return (
    <Container>
      <Row>
        <Col size="md-10">
          <hr />
          <h1>Services we provide</h1>
          <hr />
          {props.services.length ? (
            <div className="container">
              <div className="row">
                {props.services.map(service => (
                  <div className="col-md-10" key={service._id}>
                    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{backgroundColor: 'white'}}>
                      <div className="col p-4 d-flex flex-column position-static">
                        <h3 className="mb-0">{service.name}</h3>
                        <div className="mb-1 text-muted">Duration: {service.duration} min</div>
                        <p className="card-text mb-auto">{service.description}</p>
                        <strong className="d-inline-block mb-2 text-primary">$ {service.price}</strong>

                        <br />
               
                        <a href={"/booking"} role="button" className="btn badge-info">
                        {props.text}
                        </a>

                      </div>
                      <div className="col-auto d-none d-lg-block">
                        <img src={`/images/${service.images}`} width="200" height="300" alt={''}/>
                        {/* <svg className="bd-placeholder-img" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
              <small>You have no services saved.</small>
            )}
        </Col>
      </Row>
    </Container>
  );
};
