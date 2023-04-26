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

  //Breakpoints for Masonry Grid
  const breakpoints = {default: 3}

  const updateKeyword = (word) => {
    console.log(word.length)
    if (word.length > 0) {
      setKeyword(word)
      setIsLoading(true)
    }
  }

  const fetchUserData = () => {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=uF33xlOLU27xtHXbA-Sgp7A3XCE7GvnNUv8Bh3oK1RQ&per_page=50&orientation=portrait`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data.results)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [keyword])
  
  // height filter for the fetched photos in the data array
  for (let i=0; i < data.length; i++) {
    if (data[i].height > 5000 && photos.length < 6) {
      photos.push(data[i])
    }
  }

  const holders = Array.from({length: 6}, (_, index) => {
    return (
      <Placeholder height={resHeights(index)}/>
    )
  })

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home photos={photos} resHeights={resHeights} isLoading={isLoading} holders={holders} updateKeyword={updateKeyword} />} />
        <Route path="/pro" element={<Results photos={photos} resHeights={resHeights} keyword={keyword} isLoading={isLoading} holders={holders} />} />
      </Routes>
    </>
  )
}

export default App;
