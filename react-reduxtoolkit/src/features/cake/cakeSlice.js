import { createSlice } from "@reduxjs/toolkit";

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

export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions