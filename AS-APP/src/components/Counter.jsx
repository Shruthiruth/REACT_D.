import { useState } from "react"

function Counter() {
    const [Counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(Counter + 1)
    }
    return (
        <>
            <div>Counter</div>
            <p>Counter:{Counter}</p>
            <button onClick={increment}>+</button> <br></br>
            <button onClick={() => {
                setCounter(Counter - 1)
            }}>-</button> <br></br>

        </>
    )
}
export default Counter