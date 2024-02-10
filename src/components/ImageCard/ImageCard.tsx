import Image, { StaticImageData } from "next/image";
import styles from "./ImageCard.module.scss";
import { convertRgbToHex } from "@/utils/convertRgbtoHex";
import ColorCard from "./component/ColorCard";
import AddImage from "./component/AddImage";
import { Dispatch, SetStateAction } from "react";

interface ImageCardProps {
  image: StaticImageData | string;
  palette: any[];
  setFile?: Dispatch<SetStateAction<string>>;
  setColorPalette?: Dispatch<SetStateAction<never[]>>;
}

const minus = <i className="fa-solid fa-minus" />;
export default function ImageCard({
  image,
  palette,
  setFile,
  setColorPalette,
}: ImageCardProps) {
  function handleFileChange(file: string, colorPalette: never[]) {
    setFile?.(file);
    setColorPalette?.(colorPalette);
  }

  function removePalette() {
    setFile?.("");
    setColorPalette?.([]);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__content}>
        <div className={styles.wrapper__image}>
          {image ? (
            <Image src={image} alt="image file" fill />
          ) : (
            <AddImage handleFileChange={handleFileChange} />
          )}
        </div>

        {image && (
          <button className={styles.dropzone__minus} onClick={removePalette} title="Clear image">
            {minus}
          </button>
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
