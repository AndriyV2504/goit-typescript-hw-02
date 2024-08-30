import { Photo } from "../services/api";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  image: Partial<Photo>;
  onClick: (image: Partial<Photo>) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div>
      <img
        className={styles.item}
        src={image.urls?.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ImageCard;
