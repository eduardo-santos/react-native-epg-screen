import useAxios from 'axios-hooks'
import { IMovieStreamResponseModel } from '@api/models'

interface IUseMovieStreamApi {
  movieId: string
}

export const useMovieStreamApi = ({ movieId }: IUseMovieStreamApi) => {
  const [{ data, loading, error }, refetch] = useAxios({
    url: `/vod/${movieId}/stream`,
    method: 'GET',
  })

  const reponseData: IMovieStreamResponseModel = data

  return {
    reponseData,
    loading,
    error,
    refetch,
  }
}
