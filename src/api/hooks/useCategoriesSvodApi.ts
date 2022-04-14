import useAxios from 'axios-hooks'
import { ICategoriesSvodResponseModel } from '@api/models'

export const useCategoriesSvodApi = () => {
  const [{ data, loading, error }, refetch] = useAxios({
    url: '/svod',
    method: 'GET',
  })

  const reponseData: ICategoriesSvodResponseModel = data

  return {
    reponseData,
    loading,
    error,
    refetch,
  }
}
