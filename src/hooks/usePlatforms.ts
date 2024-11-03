import useData from "./useData";
import { Platform } from "../entities/Platform";
const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
