import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const BooksSection = ({ books }) => {

   


  const deleteHandler = async(id) => {
    try {
        await axios.delete(`/api/deletebook/${id}`)
        alert('Deleted success')
        window.location.reload();
        

        
    } catch (error) {
        console.log(error)
        
    }
  }



    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap'>
            {books && books.map((item) => {
                return (
                   <div className='m-3' style={{width:'200px', height:'350px', backgroundColor:'lightpink'}}>
                    <div>
                        <img  style={{width:'200px', height:'210px'}} className='img-fluid' src={item.image} alt=""/>
                        </div>
                        <h6  style={{fontSize:'15px'}}className='m-0 px-2'>{item.bookname}</h6>
                        <p style={{fontSize:'30px'}} className='m-0 px-2'>&#8377; {item.price}</p>
                        <Link to={`/getbook/${item._id}`}>View Details</Link>
                        <div className='d-flex justify-content-around align-items-center'>
                           <Link to={`/edit/${item._id}`} className='btn btn-primary'>Update</Link>
                            <button onClick={() =>deleteHandler(item._id)} className='btn btn-danger'>Delete</button>
                            </div>

                   </div>

                )

            })}

        </div>
    )
}

export default BooksSection