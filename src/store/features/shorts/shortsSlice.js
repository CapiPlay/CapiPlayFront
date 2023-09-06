import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  listShorts: [],
  actualShorts: {},
  position: 0
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
      const { short, position } = action.payload
      if (short && position) {
        state.actualShorts = { ...short }
        state.position = position
      }
    }
  }
})

export const { modifyListShorts, modifyActualShorts } = shortsSlice.actions
export default shortsSlice.reducer

const setListShorts = (list) => async (dispatch) => {
  try {
    if (list) {
      console.log(list)
      dispatch(modifyListShorts({ list: list }))
    }
  } catch (err) {
    console.error(err)
  }
}

const setActualShorts = (short, position) => async (dispatch) => {
  if (short && position) {
    dispatch(modifyActualShorts({ short: short, position: position }))
  }
}

const getActualShorts = () => async () => {

}

export {
  setListShorts,
  setActualShorts
}