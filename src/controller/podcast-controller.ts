import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-epsodes-services"
import { serviceFilterEpisodes } from "../services/filter-espsodes-service";
import { ContentType } from "../utils/content-type";
import { FilterPodcastModel } from "./models/filter-podcast-model";


export const getListEpisodes =  async(
  req:IncomingMessage, 
  res:ServerResponse
) => {

  const Content: FilterPodcastModel = await serviceListEpisodes();

  // Lógica para obter a lista de episódios
  res.writeHead(Content.statusCode, { 'Content-Type': ContentType.JSON });
  res.write(JSON.stringify(Content.body));

  res.end();
};

export const getFilteredEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const Content: FilterPodcastModel = await serviceFilterEpisodes(req.url);

  res.writeHead(Content.statusCode, { "Content-Type": ContentType.JSON});
  res.write(JSON.stringify(Content.body));

  res.end();
};