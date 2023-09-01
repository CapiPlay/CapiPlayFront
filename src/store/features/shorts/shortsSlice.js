import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  listShorts: [],
  actualShorts: {}
}

const shortsSlice = createSlice({
  name: "shorts",
  initialState,
  reducers: {
    modifyListShorts: (state, action) => {
      const { list } = action.payload
      if (list) {
        state.listShorts = [...state.listShorts, ...list]
      }
    },
    modifyActualShorts: (state, action) => {
      const { short } = action.payload
      if (short) {
        state.actualShorts = { ...short }
      }
    }
  }
})

export const { modifyListShorts, modifyActualShorts } = shortsSlice.actions
export default shortsSlice.reducer

const setListShorts = (list) => async (dispatch) => {
  try {
    if (list) {
      dispatch(modifyListShorts({ list: list }))
    }
  } catch (err) {
    console.error(err)
  }
}

const setActualShorts = (short) => async (dispatch) => {
  if (short) {
    dispatch(modifyActualShorts({ short: short }))
  }
}

export {
  setListShorts,
  setActualShorts
}