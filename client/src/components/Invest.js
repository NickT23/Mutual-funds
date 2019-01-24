import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSplittedAmount } from '../actions/actionCreator';
import Suggestion from './Suggestion';

class Invest extends Component {
    state = {
        investAmount: null,
        getAmount: false,
        balanced: null,
        elss: null,
        enquity: null,
        debt: null,
        smallMidcap: null,
        msg: '',
        splitErrorMsg: '',
        isSplitted: false
    }
    //handlechange
    handleChange = (e) => {
        this.setState({
            investAmount: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(!isNaN(Number(this.state.investAmount))) {
            this.setState({
                getAmount: !this.state.getAmount
            })

        } else {
            this.setState({
                msg: 'Invalid Amount. try again!'
            })
        }
    }
    handleSplit = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    splittedAmount = (percentage, amount) => {
        return percentage/100 * amount
    }
    submitSplit = (e) => {
        e.preventDefault();
        const { balanced, elss, enquity, debt, smallMidcap, investAmount } = this.state;
        if(Number(balanced) + Number(elss) + Number(enquity) + Number(debt) + Number(smallMidcap) !== 100) {
            this.setState({
                splitErrorMsg: 'Invalid Submission! Total percentage should be 100. try again!'
            })
        } else {
            this.props.dispatch(setSplittedAmount({
                balanced: this.splittedAmount(balanced, investAmount),
                elss: this.splittedAmount(elss, investAmount),
                enquity: this.splittedAmount(enquity, investAmount),
                debt: this.splittedAmount(debt, investAmount),
                smallMidcap: this.splittedAmount(smallMidcap, investAmount),
            }))
            this.setState({
                isSplitted: !this.state.isSplitted
            })

        }

    }
  render() {
      if(this.state.isSplitted) return <Suggestion handleRemove={this.props.handleRemove}/>
    return (
      <div>
        <div className="invest-modale">
        <header className="modale-header">
            <div className="remove-btn" onClick={() => this.props.handleRemove()}>x</div>
        </header>
        <h3 className="invest-ques">How much do you want to Invest?</h3>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Amount?" required onChange={this.handleChange} />
            {
                this.state.msg ? <p>{this.state.msg}</p> : <p></p>
            }
            <button>Submit</button>
        </form>

        </div>
        {
            this.state.getAmount ? 
        <div className="invest-modale">
            <header className="modale-header">
                <div className="remove-btn" onClick={this.handleSubmit}>x</div>
            </header>
            <h3 className="invest-ques">How do you want to split your Investment of {this.state.investAmount}?</h3>
            <p className="invest-description">Split your amount in percentage(%)</p>
            <form className="split-form" onSubmit={this.submitSplit}>
                <div className="fund-category-input">
                    <label>Balanced?</label>   
                    <input type="text" onChange={this.handleSplit} name="balanced" />
                </div>
                <div className="fund-category-input">
                    <label>ELSS?</label>   
                    <input type="text" onChange={this.handleSplit} name="elss" />
                </div>
                <div className="fund-category-input">
                    <label>Enquity?</label>   
                    <input type="text" onChange={this.handleSplit} name="enquity" />
                </div>
                <div className="fund-category-input">
                    <label>Debt?</label>   
                    <input type="text" onChange={this.handleSplit} name="debt" />
                </div>
                <div className="fund-category-input">
                    <label>Small & Midcap?</label>   
                    <input type="text" onChange={this.handleSplit} name="smallMidcap" />
                </div>
                {
                    this.state.splitErrorMsg ? <p>{this.state.splitErrorMsg}</p> : <p></p>
                }
                <button onClick = {this.submitSplit}>Submit</button>
            </form>
        </div> : <div></div>

        }
      </div>
    )
  }
}

export default connect()(Invest)