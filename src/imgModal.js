const Modal = ({img}) => {
    console.log(img)
    return (
        <div className="h-screen overflow-hidden">
            <img 
                className="w-full "
                src="https://images.unsplash.com/photo-1566051587526-f62c8a4522ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzUzMjl8MHwxfHNlYXJjaHw2fHxhZnJpY2FufGVufDB8MXx8fDE2ODIzODk5MTc&ixlib=rb-4.0.3&q=80&w=1080"
                alt="pop"/>
            <div>
                <p>Peter</p>
                <p>Emmies</p>
            </div>
        </div>
    )
}

export default Modal