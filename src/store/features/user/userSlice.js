import { createSlice } from "@reduxjs/toolkit"
import UserService from "../../../service/UserService"

// Estado inicial do usuário
const initialState = {
  isAuthenticated: false,
  token: null,
  user: {
    id: "",
    nome: "",
    senha: "",
    email: "",
    perfil: "",
    foto: "",
    dataNascimento: "",
    descricao: ""
  }
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true
      state.value = action.payload.user
      state.token = action.payload.token
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


export const { login, logout, signup } = userSlice.actions // ações do usuário
export default userSlice.reducer

const doLogin = (credentials) => async (dispatch) => {
  try {
    const res = await UserService.login(credentials)
    // dispatch(login({ user: res.user, token: res.token }))
    // alert(res)
    return res
  } catch (err) {
    console.error(err)
  }
}

const doSignup = (newUser, photo) => async (dispatch) => {
  try {
    const res = await UserService.criar(newUser, photo)
    console.log(res)
    const user = res.data
    dispatch(signup({ user: user, token: user.nome }))
  } catch (err) {
    console.error(err)
  }
}

export {
  doSignup,
  doLogin
}