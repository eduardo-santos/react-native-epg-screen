import Axios from 'axios'
import { configure } from 'axios-hooks'

export const configureApi = () => {
  const axios = Axios.create({
    baseURL: 'http://localhost:1337',
  })

  configure({ axios })
}
