const Modal = ({img}) => {
    return (
        <>
            <img className='xs:max-w-[300px] max-w-[400px] ' src={img.urls.regular} alt={img.alt_description}/>
            <div className='h-24 pb-2 px-10 flex flex-col justify-center text-blue-950'>
                <p className='text-lg font-semibold'>{img.user.name}</p>
                <p className='text-sm'>{img.user.location}</p>
            </div>
        </>
    )
}

export default Modal