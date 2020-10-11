import axios from 'axios'
import { loadUser } from '../_utils/storage'

const baseUrl = 'http://localhost:3001/user'

const authHeader = () => {
  return {
    headers: { token: `${loadUser().token}` }
  }
}

const signup = async credentials => {
  return await axios.post(`${baseUrl}/signup`, credentials)
}

const login = async credentials => {
  return await axios.post(`${baseUrl}/login`, credentials)
}


const me = async () => {
  return await axios.get(`${baseUrl}/me`, authHeader())
}

export default {
  signup,
  login,
  me
}