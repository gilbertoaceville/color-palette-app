"use client";

import { useCallback } from "react";
import ColorThief from "colorthief";
import { useDropzone } from "react-dropzone";

import styles from "../ImageCard.module.scss";

interface AddImageProps {
  handleFileChange: (file: string, palette: never[]) => void;
}

const plus = <i className="fa-solid fa-plus fa-beat-fade" />;
export default function AddImage({ handleFileChange }: AddImageProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const reader = new FileReader();
      reader.onload = async (ev) => {
        const img = new Image();
  
        img.onload = () => {
          const colorThief = new ColorThief();
          const palette = colorThief.getPalette(img, 6);
  
          handleFileChange(ev.target?.result as string, palette);
        };
  
        img.src = ev.target?.result as string;
      };
      reader.readAsDataURL(acceptedFiles[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".webp", ".jpeg", ".avif"] },
  });
  return (
    <div {...getRootProps()} className={styles.dropzone}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <h2 className={styles["wrapper__image-title"]}>
          Place image in container
        </h2>
      ) : (
        <button className={styles.dropzone__plus} title="Drag and drop allowed">{plus}</button>
      )}
    </div>
  );
}
