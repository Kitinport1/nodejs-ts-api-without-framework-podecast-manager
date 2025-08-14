 import fs from "fs";
import path from "path";
import { PodcastModel } from "../controller/models/podcast-model";

const pathData = path.join(__dirname, "../repository/podcasts.json");

export const repoPodcasts =  async(
  podcastName?: string
): Promise<PodcastModel[]> => {
  const language = "utf-8";

  const rawdata = fs.readFileSync(pathData, language);
  let jsonfile = JSON.parse(rawdata);

  if (podcastName) {
    jsonfile = jsonfile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName
  );
  }
  return jsonfile;
};
