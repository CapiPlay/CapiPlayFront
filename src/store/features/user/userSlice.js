import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"
import UserService from "../../../service/UserService"

const token = Cookies.get("token")

// Estado inicial do usuário
const initialState = {
  isAuthenticated: !!token,
  token: token || null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: async (state, action) => {
      const { token } = action.payload
      Cookies.set("token", token)
      state.isAuthenticated = true
      state.token = token
      console.log(initialState)
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.value = initialState.value
      state.token = null
    },
    signup: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload.user
    }
  }
})


export const { login, logout, signup } = userSlice.actions
export default userSlice.reducer

const doLogin = (credentials) => async (dispatch) => {
  try {
    const res = await UserService.login(credentials)
    dispatch(login({ token: res.data }))
    return res
  } catch (err) {
    console.error(err)
  }
}

const doSignup = (newUser, photo) => async (dispatch) => {
  try {
    const res = await UserService.criar(newUser, photo)
    const user = res.data
    dispatch(signup({ user: user, token: user.nome }))
  } catch (err) {
    console.error(err)
  }
}

const doLogout = () => async (dispatch) => {
  try {

  } catch (err) {
    console.error(err)
  }
}

export {
  doSignup,
  doLogin,
  doLogout,
  initialState
}