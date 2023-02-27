import { createSlice } from '@reduxjs/toolkit'
import { ISidebarState } from './sidebar.types'

const initialState: ISidebarState = {
  isOpen: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen
    },
    openSidebar: (state) => {
      state.isOpen = true
    },
    closeSidebar: (state) => {
      state.isOpen = false
    },
  },
})

export const { toggleSidebar, openSidebar, closeSidebar } = sidebarSlice.actions
