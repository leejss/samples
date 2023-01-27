import { callCount, mockGet } from "./mock";
import throttle from "./throttle";

const countMockGet = callCount(mockGet);

if (typeof window !== "undefined") {
  window.addEventListener(
    "scroll",
    throttle(async () => {
      const data = await countMockGet();
      console.log(data);
    }),
  );
}

const App = () => {
  return (
    <div className="h-screen">
      <h1 className="text-red-500 text-3xl">rate limiting events </h1>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </div>
  );
};

export default App;

const Box = () => {
  return <div className="w-full h-[500px] border"></div>;
};
