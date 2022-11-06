import styled from "@emotion/styled";
import Swiper from "./components/swiper";

const Box = styled.div`
  height: 100px;
  background-color: black;
`;

const App = () => {
  return (
    <Swiper>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </Swiper>
  );
};

export default App;
