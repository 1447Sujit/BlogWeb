
import './App.css'
import Header from './Components/Header.jsx'
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'
import { useContext, useEffect } from 'react'
import { AppContext } from './Context/AppContext.jsx'

function App() {
 
  const { fetchBlogsPosts} = useContext(AppContext)

  useEffect(()=>{
    fetchBlogsPosts();
  },[])

  return (
   <div className='appContainer'>
    <Header></Header>
    <Blogs></Blogs>
    <Pagination></Pagination>
   </div>
  )
}

export default App
