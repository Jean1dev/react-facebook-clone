const http = require('../axios')

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:7071' : ''

export const singUp = (login, password) => {
  return http.post(`${baseUrl}/api/criar-usuario`, {
    login,
    password
  })
}

export const signIn = (login, password) => {
  return http.post(`${baseUrl}/api/autenticar-via-login-password`, {
    login,
    password
  })
}
