import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, ListGroup, Row } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Reviews from './Reviews';


function Resview() {

    //object create for useparams
    const params=useParams()
    const getparams=params.id
    const [resList,setRest]=useState([])
    const getData= async ()=>{
        const result=await fetch('/restaurants.json');
        result.json().then(data=>setRest(data.restaurants))
        console.log(resList);
    };
  
    const resDetails=resList.find(data1=>data1.id==getparams)
    console.log(resDetails);
    useEffect(()=>{
      getData()
  },[])

  return (
    <>
      {resDetails?(
       <Row className='p-4'>
        <Col lg={6} md={12}>
            <img src={resDetails.photograph} className='h-75 w-100  ' alt="" />
        </Col>
        <Col lg={6} md={12}>
          <div className='mt-4'>
            <ListGroup>
              <ListGroup.Item><h2 className='text-center text-warning'>{resDetails.name}</h2></ListGroup.Item>
              <ListGroup.Item>Address:<strong>{resDetails.address}</strong></ListGroup.Item>
               <ListGroup.Item>neighbourhood:<strong>{resDetails.neighborhood}</strong></ListGroup.Item>
               <ListGroup.Item>cuisine_type:<strong>{resDetails.cuisine_type}</strong></ListGroup.Item>
               <ListGroup.Item>
                <Operatingtime workingtime={resDetails.operating_hours}>

                </Operatingtime>
                <Reviews reviewList={resDetails.reviews}></Reviews>
               </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
       </Row>):""
}
    </>
  )
}

export default Resview