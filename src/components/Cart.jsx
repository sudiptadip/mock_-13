import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart({ name, owner, description }) {
  const color = useSelector((e) => e.AppReducer.color);
  const view = useSelector((e) => e.AppReducer.view);
  // owner.html_url
  const navigate = useNavigate()
  return (
    <Box
      boxShadow={"2xl"}
      p={"10px"}
      borderRadius={"10px"}
      margin={view === "GRID" ? "" : "auto"}
      w={view === "GRID" ? "230px" : "80%"}
      border={"1px solid"}
      borderColor={color[0]}
      color={color[0]}
    >
      <Box w={view === "GRID" ? "100%" : "15%"}>
        <Image src={owner.avatar_url} />
      </Box>
      <Box>
        <Box mt={"20px"} fontSize={"xl"} fontWeight={"500"}>
          <a href={owner.html_url}>Name :- {name}</a>        
        </Box>
        <Box mt={"20px"} fontWeight={"500"} mb={"10px"}>
          {" "}
          <a target="_blank" href={owner.html_url}>Name :- {description}</a>  
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
