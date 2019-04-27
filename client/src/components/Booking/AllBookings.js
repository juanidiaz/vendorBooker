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
          {props.booking.length ? (
            <div className="container">
              <div className="row">
                {props.booking.map(booking => (
                  <div className="col-md-10" key={booking._id}>
                    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                      <div className="col p-4 d-flex flex-column position-static">
                        <h3 className="mb-0">{booking.name}</h3>
                        <div className="mb-1 text-muted">Duration: {booking.duration} min</div>
                        <p className="card-text mb-auto">{booking.description}</p>
                        <strong className="d-inline-block mb-2 text-primary">$ {booking.price}</strong>
                        <Button
                          // onClick={this.handleFormSubmit}
                          color={props.color}
                        >{props.text}
                        </Button>
                      </div>
                      <div className="col-auto d-none d-lg-block">
                        <img src={`/images/${booking.images}`} width="200" height="300" alt={''}/>
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