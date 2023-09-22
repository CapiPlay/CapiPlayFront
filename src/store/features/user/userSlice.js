import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"
import UsuarioService from "../../../service/Usuario/UsuarioService"

const token = Cookies.get("token")

const initialState = {
  isAuthenticated: !!token,
  token: token || null,
  user: {}
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

      const userDetails = await UsuarioService.detalhes()
      Cookies.set("user", JSON.stringify(userDetails))
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
    const data = await UsuarioService.login(credentials)
    dispatch(login({ token: data }))

    return data
  } catch (err) {
    throw err
  }
}

const doSignup = (newUser, photo) => async (dispatch) => {
  try {
    const res = await UsuarioService.criar(newUser, photo)
    const user = res
    dispatch(signup({ user: user}))
  } catch (err) {
    throw err
  }
}

const doLogout = () => async (dispatch) => {
  try {
    dispatch(logout())
  } catch (err) {
    console.error(err)
  }
}

export {
  doSignup,
  doLogin,
  doLogout
}