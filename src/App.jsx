import { useState } from 'react'
import BookCreate from './components/BookCreate'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
const  createbook =(title)=>{
console.log('you created the book',title)
}
  return (
   <>
   <BookCreate onCreate={createbook}/>
   </>
  )
}

export default App
