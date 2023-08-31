import React from 'react'
import image from '../assets/book.jpg'

import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
<>
         <Container>
        <Row style={{alignItems:'center'}}>
            <Col >
            <h1 style={{fontSize:'70px'}}>Crafted Exclusive Book Store</h1>
            <Link to='/getallbooks' className='btn btn-dark'>View Books</Link>
            </Col>
        
            <Col>
            <Image className="image-1" src={image} alt="image of book"/>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home