const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numberOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {    // by using redux toolkit, we dont have to explicitely returun the new state and we can directly mutate the state
        ordered: (state) => {
            state.numberOfCakes--;
        },
        restocked: (state, action) => {
            state.numberOfCakes += action.payload
        }
    }
    
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions