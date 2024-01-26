import Image, { StaticImageData } from "next/image";
import styles from "./HeroImage.module.scss";

interface HeroImageProps {
  image: StaticImageData | string;
  palette: string[];
}

export default function HeroImage({ image, palette }: HeroImageProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__image}>
        {image ? (
          <Image src={image} alt="image file" fill />
        ) : (
          <h2 className={styles["wrapper__image-title"]}>
            Place image in container
          </h2>
        )}
      </div>
    </div>
  );
}
