const redux = require('redux')
const createStore = redux.createStore
const produce = require('immer').produce



const STREET_UPDATED = 'STREET_UPDATED'

function updateStreet(street) {   // action creator
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

const initialState = {
    name: 'Nilanchal',
    address: {
        street: '7th Cross',
        city: 'Bangalore',
        state: 'Karnataka'
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default: {
            return state
        }            
    }
}


const store = redux.createStore(reducer)
console.log('Initial state is', store.getState())

const unsubscribe = store.subscribe(() =>
    console.log('Updated state is', store.getState())
)

const actions = redux.bindActionCreators({ updateStreet }, store.dispatch)

actions.updateStreet('2nd Cross, Lalli ln')

unsubscribe()