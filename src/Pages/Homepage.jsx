import { Box, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import { GetData } from "../Redux/AppReducer/Action";

function Homepage() {
  const dispatch = useDispatch();
  const data = useSelector((e) => e.AppReducer.data);
  useState(() => {
    dispatch(GetData());
  }, []);
  return (
    <Box>
      <Navbar />
      <Grid  templateColumns='repeat(4, 1fr)' gap={6} p={'50px'} >
        {data.map((e, i) => (
          <Cart key={i} {...e} />
        ))}
      </Grid>
    </Box>
  );
}

export default Homepage;
