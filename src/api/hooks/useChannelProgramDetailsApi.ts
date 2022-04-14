import useAxios from 'axios-hooks'
import { IChannelProgramDetailsResponseModel } from '@api/models'

interface IUseChannelProgramDetailsApi {
  channelId: string
  programId: string
}

export const useChannelProgramDetailsApi = ({
  channelId,
  programId,
}: IUseChannelProgramDetailsApi) => {
  const [{ data, loading, error }, refetch] = useAxios({
    url: `/channel/${channelId}/program/${programId}`,
    method: 'GET',
  })

  const reponseData: IChannelProgramDetailsResponseModel = data

  return {
    reponseData,
    loading,
    error,
    refetch,
  }
}
