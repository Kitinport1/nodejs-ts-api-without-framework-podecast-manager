import { repoPodcasts } from "../repository/podecast-repository";
import { FilterPodcastModel } from "../controller/models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (
  podcastName: string | undefined
):Promise<FilterPodcastModel> => {

  //definir a interface de retorno
  let responseFormat: FilterPodcastModel = {
    statusCode: 0,
    body: []
  }

  //busco os dados
  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repoPodcasts(queryString);

  responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NOT_FOUND;
  responseFormat.body = data;

  return responseFormat;
};
