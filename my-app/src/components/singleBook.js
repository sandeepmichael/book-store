import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const SingleBook = () => {
    const [Data, setData] = useState([]);
    const {id} = useParams("");
   
    useEffect(() => {
        const getsinglebook = async() => {
            const result = await axios.get(`/api/getbook/${id}`)
            console.log(result.data)
            setData(result.data)
        }
        getsinglebook();
    }, [id])

  return (
    <div>
        <Container>
            <Row>
                <Col>
                 <Image className="image-1" src={Data.image} alt="image of book"/>
                </Col>
                <Col>
                  <h2>{Data.bookname}</h2>
                  <h5>{Data.description}</h5>
                  <strong><h4>&#8377; {Data.price}</h4></strong>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SingleBook