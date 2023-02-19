import useAppStore from "../store/appStore";

const ConnectionState = () => {
  const connected = useAppStore((state) => state.connected);

  return <div>{connected ? "Connected" : "Not Connected"}</div>;
};

export default ConnectionState;
