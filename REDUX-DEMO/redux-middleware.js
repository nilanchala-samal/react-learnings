const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()



const CAKE_ORDERED = 'CAKE_ORDERED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'

function cakeOrder(qty = 2) {
    return {
        type: CAKE_ORDERED,
        payload: qty
    }
}

function iceCreamOrder(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

const initialCakeState = {
    numberOfCakes: 10
}

const initialIceCreamState = {
    numberOfIceCreams: 20
}

const reducerCake = (state = initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload
            }
        default:
            return state
    }
}

const reducerIceCream = (state = initialIceCreamState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED:
            return {
                ...state, 
                numberOfIceCreams: state.numberOfIceCreams - action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: reducerCake,
    iceCream: reducerIceCream
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State: ', store.getState())

const unsubscribe =  store.subscribe(() => {} )
const actions = bindActionCreators({cakeOrder, iceCreamOrder}, store.dispatch)
actions.cakeOrder(2)
actions.cakeOrder(1)
actions.cakeOrder(1)
actions.iceCreamOrder(5)

unsubscribe()