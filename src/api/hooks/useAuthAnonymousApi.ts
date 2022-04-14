import useAxios from 'axios-hooks'
import { IAuthAnonymousResponseModel } from '@api/models'

export const useAuthAnonymousApi = () => {
  const [{ data, loading, error }, refetch] = useAxios({
    url: '/auth/anonymous',
    method: 'GET',
  })

  const reponseData: IAuthAnonymousResponseModel = data

  return {
    reponseData,
    loading,
    error,
    refetch,
  }
}
