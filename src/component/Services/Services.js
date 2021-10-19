import React from 'react';
import { Card,Button, Col} from 'react-bootstrap';
import "./service.css"
const Services = (props) => {
       const {name,servicename,img,phone,about} = props.service;
    return (
        <Col className="card p-md-2 my-md-2 border-0">
        <Card>
          <Card.Img variant="top" src={img}/>
          <Card.Body>
            <Card.Title>{servicename}</Card.Title>
            <h5><i className="fas fa-user-md my-2 text-danger"></i> <span className="ms-2 text-danger">{name}</span></h5>
            <p><i className="fas fa-phone-alt me-2"></i>+88{phone}</p>
            <Card.Text>
             {about}
            </Card.Text>
            <Button variant="success" className="w-100 fs-6">Conferance Now <i className="fas fa-video ms-1"></i></Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Services;