import { motion, AnimatePresence } from "framer-motion";
import useModalStore from "../store/modal";

const Modal = () => {
  const { open, children, closeModal } = useModalStore();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={() => {
              closeModal();
            }}
          >
            Close modal
          </button>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
