import styled from "@emotion/styled";
import { Button } from "./styled";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

// Source map enabled
const App = () => {
  return (
    <div>
      <Title>React App</Title>
      <Button>Apply</Button>
    </div>
  );
};

export default App;
