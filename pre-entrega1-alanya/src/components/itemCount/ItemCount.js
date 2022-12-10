import "./ItemCount.css"
export function ItemCount() {
    return (
        <div>
            <div className="contenedor-counter">
                <div className="counter">
                    <button className="btn-resta">-</button>
                    <input className="input-cantidad" value={0}></input>
                    <button className="btn-suma">+</button>
                </div>
                <div className="contenedor-btnAgregar">
                    <button className="btn-agregar">Agregar al Carrito</button>
                </div>
            </div>
            
        </div>
    )
}

