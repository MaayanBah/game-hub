import usePlatforms from "./usePlatforms";

const platform = (platformId?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((platform) => platform.id == platformId);
};

export default platform;
