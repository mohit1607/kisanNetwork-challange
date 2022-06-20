// methods for backend.
import axios from 'axios'

const url = "http://localhost:3001/msg"
export const sendMessage = (data) => axios.post(url,data);