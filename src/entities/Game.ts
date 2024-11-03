import { Platform } from "./Platform";

// export interface Game {
//   id: number;
//   name: string;
//   slug: string;
//   background_image: string;
//   parent_platforms: { platform: Platform }[];
//   metacritic: number;
//   rating_top: number;
// }

export interface Game {
  id: number;
  slug: string;
  name: string;
  website: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  description: string;
  description_raw: string;
  metacritic: number;
  rating_top: number;
}
