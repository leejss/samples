import { Suspense, useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  return <Suspense>{/* <Posts /> */}</Suspense>;
};

export default App;
