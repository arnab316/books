import axios from 'axios';
import { createContext, useState } from 'react';

const BooksContext = createContext();

export function Provider({ children }) {
  const [books, setBooks] = useState([])
  const fetchBooks = async () => {
 const responce = await axios.get('http://localhost:3001/books')
   setBooks(responce.data);

  };
  const editBooksById=async(id, newtitle)=>{

    const responce= await axios.put(`http://localhost:3001/books/${id}`,{
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


    const valueToShare = {
      books,
      deleteBookById,
      editBooksById,
      createbook,
      fetchBooks

    }
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

// export { Provider, BooksContext };
export default BooksContext;
