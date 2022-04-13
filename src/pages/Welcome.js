import React from "react"

export default function Welcome(props) {
    
    return (
        <div className="welcome">
            <h1 className="welcome-title">¡Bienvenido a Tenzii!</h1>
            <p className="welcome-text">Listo para probar tu suerte?...</p>
            <button className="welcome-button" onClick={props.firstPage}>Iniciar</button>
        </div>
    )
}