import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './Auth'



export const store = configureStore({
  reducer: {
    auth:authSlice.reducer
  },
})