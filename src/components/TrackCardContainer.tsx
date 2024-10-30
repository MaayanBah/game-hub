import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SongCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" w="30%" padding={1}>
      {children}
    </Box>
  );
};

export default SongCardContainer;
