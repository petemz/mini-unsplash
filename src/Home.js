import Masonry from 'react-masonry-css'
import SearchBar from "./SearchBar"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { DispPhoto } from './photoItem'

function Home({ isLoading, holders, photos, updateKeyword, resHeights}) {
    const navigate = useNavigate()

    const changePage = () => {
        navigate('/pro')
    } 
    
    const [overlay, setOverlay] = useState(false)
    const [overlayPhoto, setOverlayPhoto] = useState({})

    const handleOverlay = (photo) => {
        setOverlay(true)
        setOverlayPhoto(photo)
    }
    

    const resPhotos = photos.map((photo, index) => {
        return(
          <DispPhoto onClick={() => handleOverlay(photo)}  photo={photo} height={resHeights(index)}/>
        )
    })


    //Breakpoints for Masonry Grid
    const breakpoints = {default: 3}

    return (
        <div className={`h-screen ${overlay && 'overflow-none'}`}>
            <div className='relative flex justify-center '>
                <div className='absolute w-full top-0'>
                    <div className=' h-[313px] flex items-center bg-[#dde2e9] w-full'>
                        <SearchBar change={updateKeyword}  changePage={changePage}/>
                    </div>
                </div>

                <div className='mt-64 absolute'>
                    <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid px-4"
                        columnClassName="my-masonry-grid_column"
                    >
                        {isLoading ? holders : resPhotos}
                    </Masonry>

                    <div className={` mb-5 relative max-w-[261px] overflow-hidden rounded-lg translate-x-1/2 translate-y-1/2`}>
                    
                    </div>
                </div>
            </div>

            {overlay && <div className='fixed w-full overflow-y-hidden h-screen z-20  bg-black bg-opacity-50 flex justify-center items-center'>
                
                <svg onClick={() => setOverlay(false)} className='w-6 z-30 top-10 right-20 absolute cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
                    
                <div className=' overflow-hidden rounded-lg bg-white z-20 absolute'>
                    <img className='max-w-[400px] ' src={overlayPhoto.urls.regular} alt={overlayPhoto.alt_description}/>
                    <div className='h-24 pb-2 px-10 flex flex-col justify-center text-blue-950'>
                        <p className='text-lg font-semibold'>{overlayPhoto.user.name}</p>
                        <p className='text-sm'>{overlayPhoto.user.location}</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Home