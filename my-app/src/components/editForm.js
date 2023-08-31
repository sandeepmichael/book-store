import React, {useEffect, useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import { Container, Form, Button } from 'react-bootstrap'


const EditForm = () => {
    const [values, setValues] = useState({
      bookname:'',
      description:'',
      author:'',
      image:'',
      price:'',
    })

    const {id} = useParams("");

    useEffect(() => {
        const getsinglebook = async() => {
            const result = await axios.get(`/api/getbook/${id}`)
            console.log(result.data)
            setValues({...values, bookname:result.data.bookname, description:result.data.description, author:result.data.author,
            image:result.data.image, price:result.data.price})
        }
        getsinglebook();
    }, [])
   const navigate = useNavigate()
    const submitHandler =  async (e) => {
        try {
            e.preventDefault();
            const postdata = await axios.put(`/api/updatebook/${id}`, values);
            console.log(postdata.data)
            alert('Data updated successfully')
            navigate('/getallbooks')
          
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
        <input type="text" className='form-control' placeholder="Enter Book name" name="bookname" value={values.bookname} onChange={e => setValues({...values, bookname:e.target.value})}
  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description" name="description" value={values.description} onChange={(e) => setValues({...values, description:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" name="author" value={values.author} onChange={(e) => setValues({...values, author:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Iamge url</Form.Label>
        <Form.Control type="text" placeholder="Enter Iamge url" name="image" value={values.image} onChange={(e) => setValues({...values, image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Book price" name="price" value={values.price} onChange={(e) => setValues({...values, price:e.target.value})} />
      </Form.Group>


      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default EditForm