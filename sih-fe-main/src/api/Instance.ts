import axios from 'axios'

const SESSION_STORAGE_KEY = 'sihkechode'
const BACKEND_URL = 'http://localhost:5000/api'

function authHeader(): string {
  const userData = localStorage.getItem(SESSION_STORAGE_KEY)

  const user = userData ? JSON.parse(userData) : null

  return user?.tokenData ? user.tokenData.token : ''
}

const axiosClient = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authHeader()}`,
  },
  baseURL: BACKEND_URL,
})

export default axiosClient
