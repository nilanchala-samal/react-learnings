import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})


//  steps
// 1.  Create the store
// 2. Create the slice using createSlice()
// 3. It accepts an object with various properties (name, reducers and initialState)

// 4. export the reducers 
// 5. export default todoSlice.reducer
