import useAxios from 'axios-hooks'
import { IAuthAuthenticateResponseModel } from '@api/models'

export const useAuthAuthenticateApi = () => {
  const [{ data, loading, error }, refetch] = useAxios({
    url: '/auth/authenticate',
    method: 'GET',
  })

  const reponseData: IAuthAuthenticateResponseModel = data

  return {
    reponseData,
    loading,
    error,
    refetch,
  }
}
