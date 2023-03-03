import React,{useState, useContext} from 'react'
import BooksContext from '../context/books'

function BookEdit({book, onSubmit}) {
  const [title, setTitle] = useState(book.title)
  const {editBooksById} = useContext(BooksContext)
  
const handleChanges = (e) => {
   setTitle(e.target.value)
   
}
const handleSubmit = (e) => {
   e.preventDefault()
   onSubmit();
   editBooksById(book.id, title);
   


};
  return (
    <>
      <form onSubmit={handleSubmit} className='book-edit'>
        <label>Title</label>
        <input  className="input"  value={title} onChange={handleChanges}/>
        <button className="button is-primary">
          Save
        </button>
      </form>
    </>
  )
}

export default BookEdit
