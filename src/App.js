import { useState, useEffect } from 'react'
import { resHeights, Placeholder } from './photoItem'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Results from './Results'


function App() {
  const [keyword, setKeyword] = useState("african")
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const photos = []

  const updateKeyword = (word) => {
    console.log(word.length)
    if (word.length > 0) {
      setKeyword(word)
      setIsLoading(true)
    }
  }

  useEffect(() => {
    const fetchUserData = () => {
      fetch(`https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=uF33xlOLU27xtHXbA-Sgp7A3XCE7GvnNUv8Bh3oK1RQ&per_page=6`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setData(data.results)
          setIsLoading(false)
        })
    }
    fetchUserData()
  }, [keyword])
  
  for (let i=0; i < data.length; i++) {
    photos.length < 6 && photos.push(data[i])
  }

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home photos={photos} resHeights={resHeights} isLoading={isLoading} updateKeyword={updateKeyword} />} />
        <Route path="/pro" element={<Results photos={photos} resHeights={resHeights} keyword={keyword} setKeyword={setKeyword} isLoading={isLoading} />} />
      </Routes>
    </>
  )
}

export default App;
