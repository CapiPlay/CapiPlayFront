import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  listShorts: [],
  actualShorts: {},
  position: 0,
  idUserPost: 0
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
    },
    modifyIdUserPost: (state, action) => {
      const { idUserPost } = action.payload
      if (idUserPost) {
        state.idUserPost = idUserPost
      }
    }
  }
})

export const { modifyListShorts, modifyActualShorts, modifyIdUserPost } = shortsSlice.actions
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

const setActualShorts = (short, position) => async (dispatch) => {
  if (short && position) {
    dispatch(modifyActualShorts({ short: short, position: position }))
  }
}

const getIdUserPost = (idUserPost) => async (dispatch) => {
  if (idUserPost) {
    dispatch(modifyIdUserPost({idUserPost: idUserPost}))
  }
}

export {
  setListShorts,
  setActualShorts,
  getIdUserPost
}