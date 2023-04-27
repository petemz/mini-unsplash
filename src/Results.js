import Masonry from 'react-masonry-css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DispPhoto, Placeholder } from './photoItem'
import Modal from './imgModal'

function Results({ keyword, setKeyword, isLoading, photos, resHeights }) { 
    const [overlay, setOverlay] = useState(false)
    const [overlayPhoto, setOverlayPhoto] = useState({})
    
    const resPhotos = photos.map((photo, index) => {
        if (isLoading ) {
            return (
                <Placeholder height={resHeights(index)}/>
            )
        } else {
            return(
                <DispPhoto key={photo.id} onClick={() => handleOverlay(photo)}  photo={photo} height={resHeights(index)}/>
            )
        }
    })

    const handleOverlay = (photo) => {
        setOverlay(true)
        setOverlayPhoto(photo)
    }

    //Breakpoints for Masonry Grid
    const breakpoints = {default: 3}

    const toUpperCase = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    const searchText =  isLoading ?
        'Searching for ' : 'Search Results for '

    const navigate = useNavigate();
    const changePage = () => {
        navigate('/')
    } 

    const handleRedirect = () => { 
        changePage()
        if (photos.length === 0) { setKeyword('african') } 
    }

    return (
        <div className={`h-screen overflow-x-hidden ${overlay && 'overflow-none'}`}>
            <div className='xs:pt-48 sm:pt-48 pt-60 relative flex justify-center'>
                <div className='absolute w-full top-0 bg-[#dde2e9]'>
                    <div className='sm:h-[230px] h-[270px] flex items-center sm:w-11/12 w-9/12 xs:mx-8 sm:mx-8 xs:ml-4 lg:ml-16 ml-28'>
                        <h1 className='xxs:text-3xl md:text-4xl text-5xl font-semibold text-blue-950'>
                            {searchText}
                            <span className='text-slate-500'>{`"${toUpperCase(keyword)}"`}</span>  
                        </h1>
                    </div>
                </div>

                <div className='absolute'>
                    <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid px-4"
                        columnClassName="my-masonry-grid_column"
                    >
                        {resPhotos}
                    </Masonry>
                    
                    <div className='my-4 xxs:my-10 w-fit m-auto'>
                        <button 
                            className='bg-[#dde2e9] hover:bg-blue-950 rounded-xl px-5 py-2 font-semibold border-4 text-blue-950 hover:text-[#dde2e9] border-blue-950 hover:border-[#dde2e9] text-2xl'
                            onClick={handleRedirect}
                        >
                            <span>HOME</span>
                        </button>
                    </div>
                </div>
            </div>

            {overlay && <div className='top-0 w-full overflow-y-hidden h-screen z-20 fixed bg-black bg-opacity-50 flex justify-center items-center'>     
                <svg 
                    onClick={() => setOverlay(false)} 
                    className=' w-6 top-10 right-20 xl:right-10 text-white fill-current absolute cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
                    
                <div className=' overflow-hidden rounded-lg bg-white z-20 absolute'>
                    <Modal img={overlayPhoto}/>
                </div>
            </div>}
        </div>
    )
}

export default Results