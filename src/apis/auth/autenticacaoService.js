const http = require('../axios')

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:7071' : ''

export const singUp = (login, password) => {
  return http.post(`${baseUrl}/api/create-user`, {
    login,
    password
  })
}

export const signIn = (login, password) => {
  return http.post(`${baseUrl}/api/autenticar`, {
    login,
    password
  }).then(response => {
    http.defaults.headers.authorization = `Bearer ${response.data.token}`
    return response
  })
}
