import axios from 'axios';
import { useState, useEffect } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([])
  const fetchBooks = async () => {
 const responce = await axios.get('http://localhost:3001/books')
   setBooks(responce.data);

  };
useEffect(()=>{
  fetchBooks();
}, []);  

  const editBooksById=async(id, newtitle)=>{

const responce= await axios.get(`http://localhost:3001/books/${id}`,{
          title: newtitle,
    });

    const updatedBooks = books.map(book => {
      if(book.id === id){
      return{  ...book, ...responce.data}
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  const deleteBookById =async(id)=>{
   await axios.delete(`http://localhost:3001/books/${id}`);  
    const updatedbooks =books.filter(book=> {
      return book.id!==id;
    });
    setBooks(updatedbooks)
  }

const  createbook =async(title)=>
{
const responce= await axios.post('http://localhost:3001/books', {
      
    title: title
   });
    console.log(responce)

const updatedBooks =[
  ...books,
   responce.data
]
setBooks(updatedBooks);
};
  return (
   <div className='app'>
    <h1>Reading List</h1>
   <BookList onEdit={editBooksById} books={books} onDelete={deleteBookById }/>
   <BookCreate onCreate={createbook}/>
   </div>
  )
}

export default App;
