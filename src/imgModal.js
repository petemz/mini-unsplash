const Modal = ({img}) => {
    return (
        <>
            <img className='max-h-[550px] xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] lg:max-w-[600px] max-w-[850px]' src={img.urls.regular} alt={img.alt_description}/>
            <div className='h-24 pb-2 px-10 flex flex-col justify-center text-blue-950'>
                <p className='text-lg font-semibold'>{img.user.name}</p>
                <p className='text-sm'>{img.user.location}</p>
            </div>
        </>
    )
}

export default Modal