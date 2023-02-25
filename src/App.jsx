import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([])

  const editBooksById=(id, newtitle)=>{
    const updatedBooks = books.map(book => {
      if(book.id === id){
      return{  ...book, title: newtitle}
      }
      return book
    });
    setBooks(updatedBooks);
  };
  const deleteBookById =(id)=>{
     
    const updatedbooks =books.filter(book=> {
      return book.id!==id;
    });
    setBooks(updatedbooks)
  }

const  createbook =(title)=>
{
const updatedBooks =[
  ...books,
  {id:Math.round(Math.random() *9999)
    , title }
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
