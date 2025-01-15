import { Genre } from "@/entities/Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  name: string;
  website: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  description: string;
  description_raw: string;
  metacritic: number;
  rating_top: number;
}
