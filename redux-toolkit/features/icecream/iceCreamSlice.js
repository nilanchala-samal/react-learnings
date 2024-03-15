const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    nubmerOfIceCreams: 20
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers:{
        ordered: (state) => {
            state.nubmerOfIceCreams--
        },
        restocked: (state, action) => {
            state.nubmerOfIceCreams += action.payload
        }
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions