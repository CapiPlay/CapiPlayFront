import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"
import { act } from "react-dom/test-utils"
import UserService from "../../../service/UserService"

const token = Cookies.get("token")

// Estado inicial do usuário
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
    const data = res.data
    dispatch(login({ token: data }))

    const userDetails = await UserService.detalhes()
    Cookies.set("user", userDetails.data)

    return data
  } catch (err) {
    throw err
  }
}

const doSignup = (newUser, photo) => async (dispatch) => {
  try {
    const res = await UserService.criar(newUser, photo)
    const user = res
    dispatch(signup({ user: user}))
  } catch (err) {
    console.error("erro" + err)
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