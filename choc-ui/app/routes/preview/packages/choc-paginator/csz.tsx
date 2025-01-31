import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

const Choc = () => {
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
       bg="gray.400"
      _dark={{ bg: "gray.600" }}
      p={50}
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      {["xs", "sm", "md", "lg"].map((size, key) => (
        <Pagination
          key={key}
          defaultCurrent={9}
          total={500}
          paginationProps={{ display: "flex", mb: 4 }}
          pageNeighbours={1}
          size={size}
        />
      ))}
    </Flex>
  );
}
