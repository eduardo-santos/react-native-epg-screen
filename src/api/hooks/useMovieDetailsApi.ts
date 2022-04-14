import useAxios from 'axios-hooks'
import { IMovieDetailsResponseModel } from '@api/models'

interface IUseMovieDetailsApi {
  movieId: string
}

export const useMovieDetailsApi = ({ movieId }: IUseMovieDetailsApi) => {
  const [{ data, loading, error }, refetch] = useAxios({
    url: `/vod/${movieId}`,
    method: 'GET',
  })

  const reponseData: IMovieDetailsResponseModel = data

  return {
    reponseData,
    loading,
    error,
    refetch,
  }
}
