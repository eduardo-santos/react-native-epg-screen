import useAxios from 'axios-hooks'
import { ISlideShowResponseModel } from '@api/models'

export const useSlideShowApi = () => {
  const [{ data, loading, error }, refetch] = useAxios({
    url: '/slides',
    method: 'GET',
  })

  const reponseData: ISlideShowResponseModel = data

  return {
    reponseData,
    loading,
    error,
    refetch,
  }
}
