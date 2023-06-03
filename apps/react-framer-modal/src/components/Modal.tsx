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
          <div
            style={{
              display: "grid",
              gap: "8px",
              position: "relative",
              padding: "16px",
              borderRadius: "12px",
              backgroundColor: "white",
            }}
          >
            <button
              style={{
                padding: "4px",
                borderRadius: "50%",
                border: "none",
                justifySelf: "right",
              }}
              onClick={() => {
                closeModal();
              }}
            >
              X
            </button>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
