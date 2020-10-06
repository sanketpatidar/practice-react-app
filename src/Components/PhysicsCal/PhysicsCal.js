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

    handlemass(event) {
        this.setState({
            mass: event.target.value
        })
    }
    handleacc(event) {
        this.setState({
            acc: event.target.value
        })
    }
    exe = (event) => {
        const force = parseFloat(this.state.mass) * parseFloat(this.state.acc)
        let arrlist = this.state.arrlist
        arrlist.push(force)
        this.setState({
            force: force,
            arrlist: arrlist
        });



        event.preventDefault()
    }

    onResetClick(e) {
        e.preventDefault();
        this.setState(this.initialState);
    }

    displaylist() {

        const arrlist = this.state.arrlist
        let printList

        printList = arrlist.map((force, count) => {
            return (
                <li>{force}</li>
            )
        })

        return (
            <ul>
                {printList}
            </ul>
        )
    }



    render() {
        return (
            <div>
                <h1>Physics Calculator to calculate FORCE</h1>
                <form onSubmit={this.exe} onReset={this.handleFormReset}>
                    <div>
                        <label>Enter Mass</label>
                        <input type="number" min="0" value={this.state.mass} onChange={(e) => this.handlemass(e)} />
                    </div>
                    <div>
                        <label id="acclabel">Enter Acceleration</label>
                        <input type="number" min="0" id="acc" value={this.state.acc} onChange={(e) => this.handleacc(e)} />
                    </div>
                    <div>
                        <button type='submit' id="submitBtn">Calculate Force</button>
                    </div>
                    <label>Force = </label>
                    {this.state.force}
                    <br></br>
                    <button type="button" onClick={this.onResetClick.bind(this)}>Clear</button>

                </form>
                {this.displaylist()}

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