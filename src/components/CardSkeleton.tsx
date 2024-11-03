import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
  height: string;
}

const GameCardSkeleton = ({ height }: Props) => {
  return (
    <Card>
      <Skeleton height={height} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
