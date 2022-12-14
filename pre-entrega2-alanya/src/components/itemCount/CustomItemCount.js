import "./CustomItemCount.css"

export const CustomItemCount = ({ valorCantidad,  setDescripcionStock, sumar, restar}) => {

    return (
        <div>
            <div className="contenedor-counter">
            <div className="content-msjStock">{setDescripcionStock}</div>
                <div className="counter">
                    <button className="btn-resta" onClick={restar}>-</button>
                    <input className="input-cantidad" value={valorCantidad}></input>
                    <button className="btn-suma" onClick={sumar}>+</button>
                </div>
                <div className="contenedor-btnAgregar">
                    <button className="btn-agregar">Agregar al Carrito</button>
                </div>
            </div>

        </div>
    )
}

