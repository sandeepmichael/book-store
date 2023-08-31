import React, {useState} from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'

const AddBook = () => {
  const [data, setData] = useState({
    bookname:'',
    author:'',
    description:'',
    image:'',
    price:'',
  })

  const {bookname, description, author, image, price} = data;
  const inputHandler = (e) => {
    setData({...data, [e.target.name]:e.target.value})
  }
  const submitHandler = async(e) => {
    try {
      e.preventDefault();
      const postdata = await axios.post('/api/add', data);
      console.log(postdata.data)
      alert('Data added successfully')
      setData({
        bookname:'',
        author:'',
        description:'',
        image:'',
        price:'',
      })
    } catch (error) {
      console.log(error)
    }
   
  }
  return (
    <div>
      <Container>
         <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Book name</Form.Label>
        <Form.Control type="text" placeholder="Enter Book name" name="bookname" value={bookname} onChange={inputHandler} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description" name="description" value={description} onChange={inputHandler} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" name="author" value={author} onChange={inputHandler} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Iamge url</Form.Label>
        <Form.Control type="text" placeholder="Enter Iamge url" name="image" value={image} onChange={inputHandler} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Book price" name="price" value={price} onChange={inputHandler} />
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default AddBook