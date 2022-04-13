import React from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Welcome from "./pages/Welcome"
import Main from "./pages/Main"

export default function App() {
    
    const [dice, setDice] = React.useState(dataDice())
    const [endgame, setEndgame] = React.useState(false)
    const [contador, setContador] = React.useState(0)
    const [miNumero, setMiNumero] = React.useState(Math.ceil(Math.random()*6))
    const [welcome, setWelcome] = React.useState(true)
    
    React.useEffect(() => {
        const allTrue = dice.every(die => die.isHeld)
        const sameValue = dice.every(die => die.value === miNumero)
        if (allTrue && sameValue) {
            setEndgame(true)        
        }
    }, [dice])
    
    function dataDie() {
        return {
            value: Math.ceil(Math.random()*6),
            isHeld: false,
            id: nanoid(),
        }
    }
    
    function dataDice() {
        let newDice = [];
        for(let i = 0; i < 10; i++) {
            newDice.push(dataDie())
        }
        return newDice
    }
    
    const newDice = dice.map(die => (
          <Die 
            value={die.value}
            correctvalue={miNumero}
            isHeld={die.isHeld}
            key={die.id}
            handle={() => handleDie(die.id)}
          />
    ))
    
    function handleDie(id) {
        setDice(prevDice => prevDice.map(dice => (
            dice.id === id ? 
            {...dice, isHeld: !dice.isHeld} :
            dice
        )))
    }

    function rollDice() {
        setContador(prevContador => prevContador + 1)
        if (!endgame) {
            setDice(prevDice => prevDice.map(dice => (
                dice.isHeld ?
                dice :
                dataDie()
            )))          
        } else {
            setEndgame(false)
            setContador(0)
            setDice(dataDice())
        }
    }
    
    function firstPage() {
        setWelcome(prevWelcome => !prevWelcome)
    }
    
    return (
        <div>
            {welcome ? 
            <Welcome firstPage={firstPage}/> : 
            <Main 
                endgame={endgame}
                newDice={newDice}
                rollDice={rollDice}
                contador={contador}
                miNumero={miNumero}
            />}        
        </div>
    )
}