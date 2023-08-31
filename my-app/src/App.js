import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import AllBooks from './components/allBooks';
import AddBook from './components/addBook';
import SingleBook from './components/singleBook';
import EditForm from './components/editForm';
import RegisterPage from './components/registerPage';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/getallbooks' element={<AllBooks />} exact/>
        <Route path='/getbook/:id' element={<SingleBook />} exact/>
        <Route path='/edit/:id' element={<EditForm />} exact/>
        <Route path='/addbook' element={<AddBook />} exact/>
        <Route path='/register' element={<RegisterPage />} exact/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
