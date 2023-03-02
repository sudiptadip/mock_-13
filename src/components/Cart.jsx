import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

function Cart({ name, owner, description }) {
  console.log(owner);
  return (
    <Box w={'230px'} border={"1px solid black"}>
        <Box  >
          <Image src={owner.avatar_url} />
        </Box>
        <Box>
          <Box>{name}</Box>
          <Box>{description}</Box>
        </Box>
    </Box>
  );
}

export default Cart;
