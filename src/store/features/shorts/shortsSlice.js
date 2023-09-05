import { createSlice } from "@reduxjs/toolkit"
import VideoService from "../../../service/Video/VideoService"

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
  console.log("Entrei nesse coisa")
  try {
    if (shortUUID) {
      // const index = listShorts.findIndex((prevShorts) => prevShorts.uuid === shortUUID)
      // const sizeListShorts = listShorts.length
      // console.log("index:" + index)

      console.log("Entrei para adicionar mais dois videos")
      const newShorts = []
      for (let i = 0; i < 2; i++) {
        const data = await VideoService.buscarShorts()
        newShorts.push(data)
      }

      dispatch(modifyListShorts({ list: newShorts }))
      return
    } 

    if (list) {
      console.log("Entrei aqui")
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