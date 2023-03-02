import { Box, Flex, Select } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const color = useSelector((e) => e.AppReducer.color);
  const dispatch = useDispatch()
  function ChangeTheame(e){
    let x = e.target.value
    if(x === 'Light Mode'){
      dispatch({type : "CHENGE_TO_LIGHT"})
    }else{
      dispatch({type : "CHENGE_TO_DARK"})
    }
  }
  function ChangeView(e){
    let x = e.target.value
    if(x === 'Grid View'){
      dispatch({type : "CHENGE_TO_GRID_VIEW"})
    }else{
      dispatch({type : "CHENGE_TO_LIST_VIEW"})
    }
  }
  return (
    <Flex
      justifyContent={'space-evenly'}
      alignItems={'center'}
      w={"100%"}
      h={"80px"}
      border={"1px solid"}
      borderColor={color[0]}
      bg={color[2]}
    >
      <Box>
        <Select color={color[0]} bg={color[1]} onChange={ChangeTheame} >
          <option style={{backgroundColor: color[1]}}  value="Light Mode">Light Mode</option>
          <option style={{backgroundColor: color[1]}} value="Dark Mode">Dark Mode</option>
        </Select>
      </Box>
      <Box>
        <Select color={color[0]} bg={color[1]} onChange={ChangeView} >
          <option style={{backgroundColor: color[1]}}  value="Grid View">Grid View</option>
          <option style={{backgroundColor: color[1]}} value="List View">List View</option>
        </Select>
      </Box>
    </Flex>
  );
}

export default Navbar;
