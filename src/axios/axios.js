import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.API_URL
})

instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.headers.get.accept = 'application/json'

export default instance
