import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Homepage from "./Pages/Homepage";

function App() {
  const color = useSelector((e) => e.AppReducer.color);
  return (
    <Box bg={color[1]}>
      <Homepage />
    </Box>
  );
}

export default App;
