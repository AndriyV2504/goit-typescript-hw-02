import ImageCard from "../ImageCard/ImageCard";
import { Photo } from "../services/api";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Partial<Photo>[];
  onImageClick: (image: Partial<Photo>) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={styles.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
