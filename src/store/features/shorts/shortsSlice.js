import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

const initialState = {
  listShorts: []
}

const shortsSlice = createSlice({
  name: "shorts",
  initialState,
  reducers: {
    modifyListShorts: (state, action) => {
      const { list } = action.payload
      state.listShorts = list
    }
  }
})

export const { modifyListShorts } = shortsSlice.actions
export default shortsSlice.reducer

const setListShorts = (shortUUID, list, listShorts) => async (dispatch) => {
  try {
    
    if (shortUUID) {
      const index = listShorts.findIndex((prevShorts) => prevShorts.uuid === shortUUID)
      const sizeListShorts = listShorts.length
      console.log("Tamanho da lista - ", sizeListShorts)

      const size = sizeListShorts - index
      console.log("Tamanho da lista - index: ", size)
      if (size) {

      }
    } else if (list) {
      console.log(list)
      dispatch(modifyListShorts({list: list}))
    }

  } catch (err) {
    console.error(err)
  }
}

export {
  setListShorts
}