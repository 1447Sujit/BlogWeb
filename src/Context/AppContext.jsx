import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";



//step1
export const AppContext = createContext();

export default function AppContextProvider({children}){

  const [loading,setLoading] = useState(false)
  const [posts,setPosts] = useState([])
  const [page,setPage] = useState(1)
  const [totalPages,setTotalPages] = useState(null)

  //data filling pending
  async function fetchBlogsPosts(page = 1){
    setLoading(true);

    let url = `${baseUrl}?page=${page}`
    try{
        const result = await fetch(url)
        const data = await result.json();
        console.log(data);
        setPage(data.page)
        setPosts(data.posts)
        setTotalPages(data.totalPages)
    }
    catch(error){
          console.log("Error in fetching data");
          setPage(1)
          setPage([])
          setTotalPages(null)
    }

    setLoading(false)
  }


  //Handle Page Change
  function handlePageChange(page){
    setPage(page)
    fetchBlogsPosts(page)
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogsPosts,
    handlePageChange,
  };

  //step2
  return <AppContext.Provider value={value}>
          {children}
  </AppContext.Provider>

}