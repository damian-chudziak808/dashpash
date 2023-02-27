import { configureStore } from '@reduxjs/toolkit'
import { sidebarSlice } from '~/features/sidebar/sidebarSlice'
const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
