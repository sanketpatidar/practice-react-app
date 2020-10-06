/* eslint-disable no-unused-vars */
import React from 'react';
import './PhysicsCal.css'

class PhysicsCal extends React.Component {
    constructor() {
        super();
        this.initialState = {
            mass: '',
            acc: '',
            force: '',
            arrlist: []
        };
        this.state = this.initialState;

    }

    handlemass = (event) => {
        this.setState({
            mass: event.target.value
        })
    }
    handleacc = (event) => {
        this.setState({
            acc: event.target.value
        })
    }
    exe = (event) => {
        this.setState({
            force: parseFloat(this.state.mass) * parseFloat(this.state.acc)
        });
        event.preventDefault()
        event.target.reset();
    }

    onResetClick(e) {
        e.preventDefault();
        this.setState(this.initialState);
    }



    render() {
        return (
            <div>
                <h1>Physics Calculator to calculate FORCE</h1>
                <form onSubmit={this.exe} onReset={this.handleFormReset}>
                    <div>
                        <label>Enter Mass</label>
                        <input type="number" min="0" value={this.state.mass} onChange={this.handlemass} />
                    </div>
                    <div>
                        <label>Enter Acceleration</label>
                        <input type="number" min="0" value={this.state.acc} onChange={this.handleacc} />
                    </div>
                    <div>
                        <button type='submit'>Calculate Force</button>
                    </div>
                    <label>Force = </label>
                    {this.state.force}
                    <br></br>
                    <button type="button" onClick={this.onResetClick.bind(this)}>Reset</button>
                    arrlist.push({this.state.force})
                    <div>
                        <ul>
                            {this.state.arrlist.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </form>
            </div>);

    }
}

export default PhysicsCal;

// function Sanket() {

//     const addNumber = function () {

//     }

//     const name = "Sanket";
//     let nickname = "Sanket1";

//     nickname = "Sanket2";

//     return (
//         <p className={"paragraph"}>
//             Hello {nickname}
//         </p>
//     );
// }

// export default Sanket;