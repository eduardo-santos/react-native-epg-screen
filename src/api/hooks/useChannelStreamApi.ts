import useAxios from 'axios-hooks'
import { IChannelStreamResponseModel } from '@api/models'

interface IUseChannelStreamApi {
  channelId: string
}

export const useChannelStreamApi = ({ channelId }: IUseChannelStreamApi) => {
  const [{ data, loading, error }, refetch] = useAxios({
    url: `/channel/${channelId}/stream`,
    method: 'GET',
  })

  const reponseData: IChannelStreamResponseModel = data

  return {
    reponseData,
    loading,
    error,
    refetch,
  }
}
