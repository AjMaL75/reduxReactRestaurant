import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Restaurant.css'
import { Link } from "react-router-dom";
import { getRestaurants } from "./Redux/actions/restAction";
import { useDispatch, useSelector } from "react-redux";



function Restaurant() {
  //api request to getdata
  const [restList, setRest] = useState([]);
  // const getData = async () => {
  //   const result = await fetch("/restaurants.json");
  //   result.json().then((data) => setRest(data.restaurants));
  // };
  console.log(restList);
  const dispatch=useDispatch()
  useEffect(() => {
    // getData();
    dispatch(getRestaurants)
  }, []);
 
  const {restList}=useSelector(state=>state.reducer1)
  console.log(restList);
  return (
    <Row className="p-4">
      {restList.map((res) => (
      
        <Col lg={4} md={6} className="mt-4 p-3" >
         <Link className="text-decoration-none" to={`resview/${res.id}`}>
            <Card id="c1" className="ms-5 mt-5" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={res.photograph} className="h-25" />
              <Card.Body>
                <Card.Title>{res.name}</Card.Title>
                <Card.Text>
                  {res.address}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
         </Link>
          </Col>
       
      ))}
    </Row>
  );
}

export default Restaurant;
