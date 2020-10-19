import React, { Component } from 'react';

export default class EnhanceCalc extends Component {

    constructor(props){
        super(props);
        
        this.onChangeChance = this.onChangeChance.bind(this);
        this.onChangeCrons = this.onChangeCrons.bind(this);
        this.onChangeAcc = this.onChangeAcc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            enhance_chance: '',
            cron_amt: '',
            accessory: false
        }
    }

    onChangeChance(e) {
        this.setState({enhance_chance: e.target.value});
    }

    onChangeCrons(e) {
        this.setState({cron_amt: e.target.value});
    }
    onChangeAcc(e) {
        this.setState({accessory: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('Form Submitted');
        this.setState({
            enhance_chance: '',
            cron_amt: '',
            accessory: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Enhancement Chance: </label>
                        <input  type="number"
                                className="form-control"
                                value={this.state.enhance_chance}
                                onChange={this.onChangeChance}
                                />
                    </div>
                    <div className="form-group">
                        <label>Crons per Attempt: </label>
                        <input 
                                type="number" 
                                className="form-control"
                                value={this.state.cron_amt}
                                onChange={this.onChangeCrons}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="checkbox" 
                                    id="accessory" 
                                    onChange={this.onChangeAcc}
                                    />
                            <label className="form-check-label">Accessory?</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Calculate Chance" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}