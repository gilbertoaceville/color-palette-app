import Image, { StaticImageData } from "next/image";
import styles from "./ImageCard.module.scss";
import { convertRgbToHex } from "@/utils/convertRgbtoHex";
import ColorCard from "./component/ColorCard";

interface ImageCardProps {
  image: StaticImageData | string;
  palette: any[];
}

export default function ImageCard({ image, palette }: ImageCardProps) {
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

      {palette.length > 0 && (
        <ul className={styles.wrapper__palette}>
          {palette.map((color, index) => {
            const rgb = `rgb(${color.join(",")})`;
            const hex = `#${color.map(convertRgbToHex).join("")}`;

            return <ColorCard key={`${rgb}-${index}`} {...{ rgb, hex }} />;
          })}
        </ul>
      )}
    </div>
  );
}
