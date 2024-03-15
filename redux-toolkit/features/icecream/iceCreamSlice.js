const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    nubmerOfIceCreams: 20
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.nubmerOfIceCreams--
        },
        restocked: (state, action) => {
            state.nubmerOfIceCreams += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase('cake/ordered', (state) => {
            state.nubmerOfIceCreams--
        })
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions