import { Platform } from "../entities/Platform";
import { Genre } from "../hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
