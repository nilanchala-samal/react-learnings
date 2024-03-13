const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers


// 1.
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'


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

function orderIcecream(quantity = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: quantity
    }
}

function restockIcecream(quantity = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: quantity
    }
}


// 3.
// const initialState = {  // initial state
//     numberOfCakes: 10,
//     numberOfIcecreams: 20
// }

const initialCakeState = {
    numberOfCakes: 10
}

const initialIcecreamState = {
    numberOfIcecreams: 20
}

// 4.
const cakeReducer = (state = initialCakeState, action) => {
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
const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - action.payload
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams + action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

// 5.
const store = createStore(rootReducer)
console.log('Initial State: ', store.getState())

const unsubscribe = store.subscribe(() =>
    console.log('Updated state', store.getState())
)

// store.dispatch(orderCake())   // dispatch method accepts the action
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// store.dispatch(restockCake(3))
// store.dispatch(restockCake())

const actions = bindActionCreators({ orderCake, restockCake, orderIcecream, restockIcecream }, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.restockCake()
actions.orderIcecream()
actions.orderIcecream()
actions.restockIcecream(2)

unsubscribe()  // once unsubscribed, the dispatch method will not cause the subscribe() to run

store.dispatch(orderCake())