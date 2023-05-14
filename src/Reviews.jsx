import React from 'react'
import { Accordion } from 'react-bootstrap'

function Reviews({reviewList}) {
  return (
    <>
    <div className='mt-5'>
        <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header> <h5>Reviews</h5> </Accordion.Header>
        <Accordion.Body>
            {
                reviewList.map(i=>
                    <div>
                        <h6>{i.name}</h6>
                        <p>{i.date}</p>
                        <h6>{i.reviews}</h6>
                        <p>{i.comments}</p>
                    </div>
                )
            }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion></div>
    </>
  )
}

export default Reviews