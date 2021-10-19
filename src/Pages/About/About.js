import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import doctor from "./../../assets/images/doctor-14044.png"
const About = () => {
    return (
      <Container fluid="md">
   <Row>
    <Col sm={12} md={6} className="d-flex justify-content-center aling-items-center py-5">
    <img src={doctor} alt="" />
    </Col>
    <Col className="d-flex justify-content-center aling-items-center mt-5">
    <div>
    <h1>MEDICAL & TREATMENT</h1>
    <h4 className="ms-0">Breast cancer in younger women: How does it manifest?</h4>
    <p>News reports of singer Sarah Harding’s death at the age of 39 years in early September 2021 following a late breast cancer diagnosis brought breast cancer to the forefront once again. Not only did the news of her passing invoke sadness, but it also brought an awareness that breast cancer can — and does — affect younger women.

    Although breast cancer can occur in men, it is most common in women over 50 years of age. Still, younger women are also at risk of the condition.
    
    In this Special Feature, MNT investigates breast cancer in young women and how it differs in younger versus older women. We also talk with two experts about this important topic.</p>
    <Row className="mt-4">
    <Col xs={6} md={4}>
      <h2 className="text-center"><i className="fas fa-stethoscope"></i> Professional Doctors</h2>
    </Col>
    <Col xs={6} md={4}>
      <h2 className="text-center"><i class="fas fa-shield-alt"></i> Exclusive Blood Bank</h2>
    </Col>
    <Col xs={6} md={4}>
    <h2 className="text-center"><i class="fas fa-tasks d-block"></i> Track your Progress</h2>
    </Col>
  </Row>
    </div>
    </Col>
  </Row>
      </Container>
    );
};

export default About;