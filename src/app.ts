import { getFilteredEpisodes, getListEpisodes } from './controller/podcast-controller';
import { Routes } from './routes/rutes';
import { HttpMethods } from './utils/http-methods';
import * as http from 'http';

export const app = async (
  req: http.IncomingMessage, 
  res: http.ServerResponse
) => {
    //querystrig
    const baseUp = req.url?.split("?")[ 0 ] || '';
    const querystrig = req.url?.split("?")[ 1 ] || '';

    if (req.method === HttpMethods.GET  && baseUp === Routes.LIST_EPISODES) {
      await getListEpisodes(req, res);
    }

    if (req.method === HttpMethods.GET && querystrig === Routes.FILTER_EPISODES) {
      await getFilteredEpisodes(req, res);
    }
  }