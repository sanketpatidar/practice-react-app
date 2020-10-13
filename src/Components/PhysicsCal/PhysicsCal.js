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

    handlemass(e) {
        this.setState({
            mass: e.target.value
        })
    }
    handleacc(e) {
        this.setState({
            acc: e.target.value
        })
    }
    exe = (e) => {
        const force = parseFloat(this.state.mass) * parseFloat(this.state.acc)
        let arrlist = this.state.arrlist
        arrlist.push(force)
        this.setState({
            force: force,
            arrlist: arrlist
        });
        e.preventDefault()
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
            <div class="settings">
                <h1>Physics Calculator to calculate FORCE</h1>
                <form onSubmit={this.exe} onReset={this.handleFormReset}>

                    <div>
                        <label id="label">Enter Mass  </label>
                        <input type="number" step='any' min="0" id="textfield" value={this.state.mass} onChange={(e) => this.handlemass(e)} />
                    </div>

                    <div>
                        <label id="label">Enter Acceleration</label>
                        <input type="number" step='any' min="0" id="textfield" value={this.state.acc} onChange={(e) => this.handleacc(e)} />
                    </div>

                    <br></br>

                    <button type='submit' id="submit">Calculate Force</button><br></br><br></br>

                    <label id="label">Force = {this.state.force} </label>

                    <br></br><br></br>

                    <button type="button" id="clear" onClick={this.onResetClick.bind(this)}>Clear</button>
                    <br></br><br></br>

                    <label id="label">Calculation History  </label>
                    {this.displaylist()}
                </form>
            </div>);

    }
}

export default PhysicsCal;

