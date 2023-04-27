export function resHeights (index) {
    if (index === 0) {
        return "h-[295px] md:h-[221px] sm:h-[197px] xs:h-[175px] xxs:h-[145px]"
    } else if (index === 2) {
        return "h-[345px] md:h-[258px] sm:h-[227px] xs:h-[200px] xxs:h-[165px]"
    } else if (index === 3) {
        return "h-[385px] md:h-[275px] sm:h-[235px] xs:h-[200px] xxs:h-[175px]"
    } else {
        return "h-[395px] md:h-[296px] sm:h-[255px] xs:h-[225px] xxs:h-[187px]"
    }
}

export function DispPhoto ({photo, height, onClick}) {
    return(
        <div onClick={() => onClick(true)}  key={photo.id}
            className={`${height} xxs:w-[125px] xs:w-[150px] sm:w-[170px] md:w-[200px] md:h-100px max-w-[261px] overflow-hidden relative rounded-lg transition-all ease-in-out hover:scale-105 shadow-[0px_4px_30px_rgba(0,0,0,0.18)] cursor-zoom-in`}
        >
            <img src={photo.urls.regular} alt={photo.alt_description} className='h-full w-full object-cover' />
            <div className='absolute h-10 z-10 sm:left-3 left-5 xs:bottom-2 sm:bottom-4 bottom-6 text-white'>
                <p className='sm:text-sm line-clamp-1'>{photo.user.name}</p>
                <p className='sm:text-[10px] text-xs line-clamp-1'>{photo.user.location}</p>
            </div>
            <div className='absolute top-0 z-0 bg-gradient-to-b from-transparent from-70% to-black h-full w-full opacity-90'>
                {/*dark overlay*/}
            </div>
        </div>
    )
}

export function Placeholder ({height}) {
    return (
        <div className={`${height} bg-neutral-100 xxs:w-[125px] xs:w-[150px] sm:w-[170px] md:w-[200px] w-[261px] relative rounded-lg ]`}>
            <div className='absolute z-10 left-4 sm:bottom-4 bottom-6'>
                <p className='h-3 sm:h-2 xs:w-16 sm:w-20 w-36 bg-neutral-200 sm:mb-1 mb-2'></p>
                <p className='h-3 sm:h-2 xs:w-10 sm:w-14 w-24 bg-neutral-200'></p>
            </div>
        </div>
    )
}
