import { useLocation } from "react-router-dom";
import ModalView from "./modal.view";

const Modal = () => {
  const location = useLocation();
  return (
    <ModalView
      src="https://images.unsplash.com/photo-1667635195583-ddfb134f39c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
      id="1"
    />
  );
};

export default Modal;
