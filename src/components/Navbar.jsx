import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const color = useSelector((e) => e.AppReducer.color);
  return (
    <Box
      w={"100%"}
      h={"80px"}
      border={"1px solid"}
      borderColor={color[0]}
      bg={color[2]}
    ></Box>
  );
}

export default Navbar;
