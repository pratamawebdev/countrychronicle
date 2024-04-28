import styles from "./Modal.module.css";
import { ModalProps } from "../../../types";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const xMark = "./images/xmark.svg";

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <img
          src={xMark}
          alt="xmark icon"
          className={styles.closeButton}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Modal;
