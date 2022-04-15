import useAxios from 'axios-hooks'
import { IEPGResponseModel } from '@api/models'

export const useEPGApi = () => {
  const [{ data, loading, error }, refetch] = useAxios({
    url: '/epg',
    method: 'GET',
  })

  const reponseData: IEPGResponseModel = {
    channels: data,
  }

  return {
    reponseData,
    loading,
    error,
    refetch,
  }
}
