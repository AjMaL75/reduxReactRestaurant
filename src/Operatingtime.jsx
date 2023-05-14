import React from 'react'
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Operatingtime({workingtime}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
       <Button variant="primary" onClick={handleShow}>
        Operating time
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning text-center'>Timing</Modal.Title>
        </Modal.Header>
        <Modal.Body> <ListGroup>
      <ListGroup.Item>Monday:<strong>{workingtime.Monday}</strong></ListGroup.Item>
      <ListGroup.Item>Tuesday:<strong>{workingtime.Tuesday}</strong></ListGroup.Item>
      <ListGroup.Item>Wednesday:<strong>{workingtime.Wednesday}</strong></ListGroup.Item>
      <ListGroup.Item>Thursday:<strong>{workingtime.Thursday}</strong></ListGroup.Item>
      <ListGroup.Item>Friday:<strong>{workingtime.Friday}</strong></ListGroup.Item>
      <ListGroup.Item>Saturday:<strong>{workingtime.Saturday}</strong></ListGroup.Item>
      <ListGroup.Item>Sunday:<strong>{workingtime.Sunday}</strong></ListGroup.Item>
    </ListGroup></Modal.Body>
    
      </Modal>
    </div>
  )
}

export default Operatingtime