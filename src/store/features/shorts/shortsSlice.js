import { createSlice } from "@reduxjs/toolkit"
import ShortsService from "../../../service/ShortsService"

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
      state.listShorts = [...state.listShorts, ...list]
    },
    modifyActualShorts: (state, action) => {
      const { short } = action.payload
      state.actualShorts = {...short}
      console.log(state.actualShorts)
    }
  }
})

export const { modifyListShorts, modifyActualShorts } = shortsSlice.actions
export default shortsSlice.reducer

const setListShorts = (shortUUID, list, listShorts) => async (dispatch) => {
  try {
    if (shortUUID) {
      // const index = listShorts.findIndex((prevShorts) => prevShorts.uuid === shortUUID)
      // const sizeListShorts = listShorts.length
      // console.log("index:" + index)
      const newShorts = []
      for (let i = 0; i < 2; i++) {
        const data = await ShortsService.buscar()
        newShorts.push(data)
      }
      dispatch(modifyListShorts({ list: newShorts }))
    } else if (list) {
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