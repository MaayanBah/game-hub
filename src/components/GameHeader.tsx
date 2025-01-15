import Game from "../entities/Game";
import { Link } from "react-router-dom";
import ExpandableText from "./ExpandableText";
import { Text } from "@chakra-ui/react";

interface Props {
  data: Game;
}

const GameHeader = ({ data }: Props) => {
  return (
    <>
      <Link to={data?.website}>
        <Text fontSize="3xl" marginLeft={1}>
          {data?.name}
        </Text>
      </Link>
      <ExpandableText>{data.description_raw}</ExpandableText>
    </>
  );
};

export default GameHeader;
