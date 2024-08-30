import Modal from "react-modal";
import { Photo } from "../services/api";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Partial<Photo>;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.content}>
        <img
          src={image.urls?.regular}
          alt={image.alt_description}
          className={styles.image}
        />
        <p>{image.description}</p>
        <p>{image.user?.name}</p>
        <p>{image.likes} likes</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
