
export const Item = (elemento) => {
    return (
        <div>
            <div>
                <h2>{elemento.name}</h2>
                <h3>S/. {elemento.price}</h3>
                <img src={elemento.img}/>
                
            </div>
        </div>
    )
}

