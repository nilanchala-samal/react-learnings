const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators


// 1.
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'


// 2.
function orderCake() {    // This is the 'action creator' function which returns an object
    return {    // The returned object is the action
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

// 3.
const initialState = {  // initial state
    numberOfCakes: 10
}

// 4.
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            }
        default:
            return state
    }
}

// 5.
const store = createStore(reducer)
console.log('Initial State: ', store.getState())

const unsubscribe = store.subscribe(() =>
    console.log('Updated state', store.getState())
)

// store.dispatch(orderCake())   // dispatch method accepts the action
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// store.dispatch(restockCake(3))
// store.dispatch(restockCake())

const actions = bindActionCreators({orderCake, restockCake}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.restockCake()

unsubscribe()  // once unsubscribed, the dispatch method will not cause the subscribe() to run

store.dispatch(orderCake())