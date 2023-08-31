import React, {useState, useEffect} from 'react'

import axios from 'axios'
import BooksSection from './booksSection';
const AllBooks = () => {
    const [books, GetBooks]  = useState([]);
    useEffect(() => {
         const getallbooks = async(req, res) => {
            const result = await axios.get('/api/getbooks');
            console.log(result.data);
            GetBooks(result.data)
         }
         getallbooks();
    }, [])
  return (
    <div>
      {books? <BooksSection books={books}/> : <h3>No records found</h3>}

    </div>
  )
}

export default AllBooks