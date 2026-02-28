import React from 'react'

class Counter extends React.Component {
    constructor() {
        console.log("constructor calling..")
        super();
        this.state = {
            Counter: 0
        }

        this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState({
            Counter: this.state.Counter + 1
        })
    }
    
    decrement=() => {
        this.setState({
            Counter: this.state.Counter - 1
        })
    }
    render() {
         console.log("render..");
        return (
            <>  
           
                <div>
                
                    <h3>Counter</h3>
                    <h4>Counter:{this.state.Counter}</h4>
                    <button onClick={this.increment}>+</button> <br></br>
                    <button onClick={this.decrement}>-</button>
                </div>
            </>
        )
    }
}
export default Counter