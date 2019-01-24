const url = process.env.NODE_ENV == 'production' ?  'http://cleartax-mf-recommendation.herokuapp.com/api' : 'http://localhost:8000/api'

export function getAllBalancedFunds() {
    return dispatch => {
        fetch(`${url}/balanced-funds`)
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'ALL_BALANCED_FUNDS', data})
        })
    }
}

export function getAllElssFunds() {
    return dispatch => {
        fetch(`${url}/elss-funds`)
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'ALL_ELSS_FUNDS', data})
        })
    }
}

export function getAllEquityFunds() {
    return dispatch => {
        fetch(`${url}/equity-funds`)
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'ALL_EQUITY_FUNDS', data})
        })
    }
}

export function getAllDebtFunds() {
    return dispatch => {
        fetch(`${url}/debt-funds`)
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'ALL_DEBT_FUNDS', data})
        })
    }
}

export function getAllSmallMidcapFunds() {
    return dispatch => {
        fetch(`${url}/small-midcap-funds`)
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'ALL_SMALLMIDCAP_FUNDS', data})
        })
    }
}

export function setSplittedAmount(data) {
    return {
        type: 'SPLITTED_AMOUNT',
        data
    }
}