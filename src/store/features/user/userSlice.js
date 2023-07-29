import { createSlice } from "@reduxjs/toolkit"

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
      state.token = action.payload.token
    }
  }
})


export const { login, logout, signup } = userSlice.actions // ações do usuário
export default userSlice.reducer

export const doLogin = (userCredentials) => async (dispatch) => {
  try {
    const response = await _fakeLoginAPI(userCredentials)
    dispatch(login({ user: response.user, token: response.token }))
    return response
  } catch (error) {
    throw new Error("Credenciais inválidas")
  }
}

const _fakeLoginAPI = (userCredentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userCredentials.email === "user@example.com" && userCredentials.senha === "123456") {
        resolve({
          user: {
            nome: "Nome do Usuário",
            email: "user@example.com"
          },
          token: "token_de_acesso_gerado_pelo_backend"
        })
      } else {
        reject(new Error("Credenciais inválidas"))
      }
    }, 1000)
  })
}

export const doSignup = (newUser) => async (dispatch) => {
  try {
    const res = newUser
    dispatch(signup({ user: res.value, token: res.token }))
  } catch (err) {
    console.error(err)
  }
}