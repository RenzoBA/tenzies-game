import React from "react"
import Confetti from "react-confetti"

export default function Main(props) {
    return (
        <main>
            {props.endgame && <Confetti />}
            <h1 className="title">Tenzii</h1>
            <h2 className="description">Lanza los dados hasta que todos sean iguales al número dado. Presiona cada dado para mantener su valor actual.</h2>
            <div className="contenedor">
                <div className="dados">
                    {props.newDice}
                </div>
                <div className="informacion">
                    <div className="miNumero">
                        <h4>Tu número: {props.miNumero}</h4>
                    </div>
                    <div className="contador">
                        <h4>Lanzadas: {props.contador}</h4>
                    </div>
                </div>
            </div>
            <button className="boton" onClick={props.rollDice}>{props.endgame ? "NUEVO JUEGO" : "LANZAR"}</button>
        </main>
    )
}