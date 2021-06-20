const http = require('../axios')

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:7172' : ''

export const savePost = (post) => {
  return http.post(`${baseUrl}/api/criar-post`, post)
}

export const getFeed = () => {
  return http.get(`${baseUrl}/api/get-feed`)
}
