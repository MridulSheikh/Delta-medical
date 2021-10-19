import React from 'react';
import { Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './carousel.css'
const Carousel = () => {
    return (
      <div className="w-100">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item item-1 active">
          <div className="w-60">
          <h1>Emargency suport On C.O.V.I.D -19</h1>
          <p className="mb-5">When health systems are overwhelmed, both direct mortality from an outbreak and indirect mortality from vaccine-preventable and treatable conditions increase dramatically. Countries will need to make difficult decisions to balance the demands of responding directly to COVID-19.</p>
          <Link to="/login" className="mx-2">
          <Button variant="success"><i className="fas fa-sign-in-alt"></i> Login Now</Button>
          </Link>
          <Link to="/service" className="mx-2">
        <Button variant="outline-warning"><i className="fas fa-plus-circle"></i> Our treatment</Button>
        </Link>
          </div>
        </div>
        <div className="carousel-item item-2">
        <div className="w-60">
        <h1>Health care</h1>
        <p className="mb-5">The range of home health care services a patient can receive at home is limitless. Depending on the individual patient's situation, care can range from nursing care to specialized medical services, such as laboratory workups.</p>
        <Link to="/login" className="mx-2">
        <Button variant="success"><i className="fas fa-sign-in-alt"></i> Login Now</Button>
        </Link>
        <Link to="/service" className="mx-2">
      <Button variant="outline-warning"><i className="fas fa-plus-circle"></i> Our treatment</Button>
      </Link>
        </div>
        </div>
        <div className="carousel-item item-3">
        <div className="w-60">
        <h1>We are protect your life</h1>
        <p className="mb-5">Some members of Congress are considering significant changes to Medicare that could have a devastating effect on millions of Americans. Proponents call these changes government “negotiation,” but what roposing is anything but that.</p>
        <Link to="/login" className="mx-2">
        <Button variant="success"><i className="fas fa-sign-in-alt"></i> Login Now</Button>
        </Link>
        <Link to="/service" className="mx-2">
      <Button variant="outline-warning"><i className="fas fa-plus-circle"></i> Our treatment</Button>
      </Link>
        </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>
          );
};

export default Carousel;