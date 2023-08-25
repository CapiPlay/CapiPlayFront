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
    },
    anonimous: (state, action) => {
      const { token } = action.payload
      state.token = token
    }
  }
})

export const { login, logout, signup, anonimous } = userSlice.actions
export default userSlice.reducer

const doLogin = (credentials) => async (dispatch) => {
  try {
    const res = await UserService.login(credentials)
    await dispatch(login({ token: res.data }))

    const userDetails = await UserService.detalhes()
    Cookies.set("user", JSON.stringify(userDetails.data))

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
    dispatch(logout())
  } catch (err) {
    console.error(err)
  }
}

const getTokenAnonimous = () => async (dispatch) => {
  try {
    const userToken = Cookies.get("token")
    if (userToken) {
      return
    }
    const tokenAnonimous = generateTokenAnonimous()
    dispatch({ token: tokenAnonimous })
  } catch (err) {
    console.error(err)
  }
}

const generateTokenAnonimous = async () => {
  const tokenAnonimo = await UserService.getTokenAnonimo()
  Cookies.set("anonimo", tokenAnonimo)
}

export {
  doSignup,
  doLogin,
  doLogout,
  getTokenAnonimous
}