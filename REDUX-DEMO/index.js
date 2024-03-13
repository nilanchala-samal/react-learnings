const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake() {    // This is the 'action creator' function which returns an object
    return {    // The returned object is the action
        type: CAKE_ORDERED,
        quantity: 1
    }
}

const initialState = {  // initial state
    numberOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return state
    }
}

const store = createStore(reducer)
console.log('Initial State: ', store.getState())

const unsubscribe = store.subscribe(() =>
    console.log('Updated state', store.getState())
)

store.dispatch(orderCake())   // dispatch method accepts the action
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()  // once unsubscribed, the dispatch method will not cause the subscribe() to run

store.dispatch(orderCake())
console.log('Nothing happened above')