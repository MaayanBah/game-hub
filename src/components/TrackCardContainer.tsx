import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const TrackCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      w={{ base: "100%", lg: "80%" }}
      h={{ base: "100%", lg: "80%" }}
      padding={1}
    >
      {children}
    </Box>
  );
};

export default TrackCardContainer;
