"use client";

import { ChangeEvent, useState } from "react";
import ColorThief from "colorthief";

import NavBar from "@/components/NavBar/NavBar";
import HeroImage from "@/components/HeroImage/HeroImage";

export default function Home() {
  const [file, setFile] = useState("");
  const [colorPalette, setColorPalette] = useState([]);

  function uploadFile(e: ChangeEvent<HTMLInputElement>) {
    const targetFile = e.target.files?.[0];

    const reader = new FileReader();
    reader.onload = async (ev) => {
      const img = new Image();

      img.onload = () => {
        const colorThief = new ColorThief();
        const palette = colorThief.getPalette(img, 6);

        setFile(ev.target?.result as string);
        setColorPalette(palette);
      };

      img.src = ev.target?.result as string;
    };

    reader.readAsDataURL(targetFile as Blob);
  }

  return (
    <>
      <NavBar uploadFile={uploadFile} />
      <main className="main">
        <HeroImage palette={colorPalette} image={file} />
      </main>
    </>
  );
}
