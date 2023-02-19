import useCountStore from "../store/countStore";

const Count = () => {
  const countStore = useCountStore();
  return (
    <div>
      <h1>{countStore.count}</h1>
      <h1>{countStore.name}</h1>
    </div>
  );
};

export default Count;
