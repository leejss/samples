import Modal from "./components/Modal";
import useModalStore from "./store/modal";

const App = () => {
  const openModal = useModalStore((state) => state.openModal);
  return (
    <div>
      {/*  Modal Button */}
      <button
        onClick={() => {
          openModal(<div>Open modal</div>);
        }}
      >
        open Modal
      </button>
      <Modal />
    </div>
  );
};

export default App;
