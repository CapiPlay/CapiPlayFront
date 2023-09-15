import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isClicked: false
}

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    clickOpenSideBar: async (state, action) => {
      state.isClicked = !state.isClicked
      console.log(state.isClicked)
    }
  }
})

export const { clickOpenSideBar } = headerSlice.actions
export default headerSlice.reducer

const doIsClicked = () => async (dispatch) => {
  try {
    dispatch(clickOpenSideBar())
  } catch (err) {
    console.error(err)
  }
}

export {
  doIsClicked,
  initialState
}