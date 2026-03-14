import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from './counterSlice'

function Counter() {

    const counterValue = useSelector(state=>state.counter.count)
    const disPatch = useDispatch()

    const incrementByOne = ()=>{
        disPatch(increment())
    }
     const decrementByOne = ()=>{
        disPatch(decrement())
    }
 
    return (
        <>
            <h1>Counter : {counterValue}</h1>
            <button className="btn btn-primary" onClick={incrementByOne}>+</button>
            <button className="btn btn-warning" onClick={decrementByOne}>-</button>
        </>
    )
}
export default Counter