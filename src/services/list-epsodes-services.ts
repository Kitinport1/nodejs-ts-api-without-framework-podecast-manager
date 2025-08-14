import { FilterPodcastModel } from "../controller/models/filter-podcast-model";
import { repoPodcasts } from "../repository/podecast-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async ():Promise<FilterPodcastModel> => {
    //definir o contrato
    let responseFormat: FilterPodcastModel = {
      statusCode: 0,
      body: []
    }
  //busco os dados
  const data = await repoPodcasts();

  //verifico se encontrei dados
  responseFormat.statusCode = 
  data.length !== 0 ? StatusCode.OK : StatusCode.NOT_FOUND;
  responseFormat.body = data;

  return responseFormat;
};



