import Modal from "./components/Modal";
import useModalStore from "./store/modal";

const App = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div>
      {/*  Modal Button */}
      <button
        onClick={() => {
          openModal(
            <div>
              <h1>This is modal system</h1>
              <button
                onClick={() => {
                  openModal(<h1>Another modal</h1>);
                }}
              >
                Open another modal
              </button>
            </div>,
          );
        }}
      >
        open Modal
      </button>
      <Modal />
    </div>
  );
};

export default App;
