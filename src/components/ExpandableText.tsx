import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  length?: number;
}

const ExpandableText = ({ children, length = 300 }: Props) => {
  const [isExpended, setIsExpended] = useState(true);
  const onClick = () => {
    setIsExpended(!isExpended);
  };

  if (!children) return null;

  if (children.length <= length) {
    return <Text>{children}</Text>;
  }

  return (
    <>
      <div>
        {isExpended === true ? children.slice(0, length) + "..." : children}
      </div>
      <Button
        onClick={onClick}
        size="sm"
        marginTop={2}
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
      >
        {isExpended === true ? "More" : "less"}
      </Button>
    </>
  );
};

export default ExpandableText;
