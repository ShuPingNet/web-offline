import axios from 'axios'

let axiosInstance = axios.create({
  baseURL: `http://`,
  withCredentials: true
})

export const http = axiosInstance

export const getMainContent = cb => {
  http.get('./static/data/mainContent.json').then(res => cb(res))
}
export default {
  getMainContent
}
