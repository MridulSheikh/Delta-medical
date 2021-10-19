import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Services from '../../component/Services/Services';
import "./services.css"
const Service = () => {
   const [service, setservice] = useState([]);
   useEffect(()=>{
       fetch("./fakeData.json")
       .then(res => res.json())
       .then(data => setservice(data))
   },[])
    return (
        <Row xs={1} md={4} className="g-0 p-md-3 card-row">
        {
            service?.map(sv => <Services
                key={sv.id}
                service={sv}
                ></Services>)
        }
        </Row>
    );
};

export default Service;