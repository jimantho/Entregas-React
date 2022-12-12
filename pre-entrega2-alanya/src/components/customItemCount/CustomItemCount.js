import "./CustomItemCount.css"

export const CustomItemCount = ({ valorCantidad, setValorCantidad, stock }) => {



    const sumar = () => {
        valorCantidad < stock ? setValorCantidad(valorCantidad + 1) : setValorCantidad(valorCantidad);
    }
    const restar = () => {
        valorCantidad !== 1 ? setValorCantidad(valorCantidad - 1) : setValorCantidad(valorCantidad)
    }



    return (
        <div>
            <div className="contenedor-counter">
            <div className="content-msjStock">{stock === 0 ? "Sin Stock":"Stock Disponible"}</div>
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

