import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Mfunds from './components/Mfunds';
import FundsCategory from './components/FundsCategory';
import { getAllBalancedFunds, getAllElssFunds, getAllEquityFunds, getAllDebtFunds, getAllSmallMidcapFunds } from './actions/actionCreator';
import Suggestion from './components/Suggestion';

class App extends Component {
  state = {
    targetFund: []
  }
  componentDidMount = () => {
    this.props.dispatch(getAllBalancedFunds())
    this.props.dispatch(getAllElssFunds())
    this.props.dispatch(getAllEquityFunds())
    this.props.dispatch(getAllDebtFunds())
    this.props.dispatch(getAllSmallMidcapFunds())
  }

  handleTargetFund = (fund) => {
    fetch(`http://localhost:8000/api/${fund}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        targetFund: data.data
      })
    })
  }
  
  render() {
    return (
        <BrowserRouter>
          <div className="App">
          <Mfunds handleTarget={this.handleTargetFund} />
          <FundsCategory funds={this.state.targetFund} />
          {/* <Suggestion /> */}
          
        </div>
      </BrowserRouter>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    splittedAmount: state.splittedAmount
  }
}

export default connect(mapStateToProps)(App);
