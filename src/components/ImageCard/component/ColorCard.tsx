import React, { SyntheticEvent, useState } from "react";

interface ColorCardProps {
  rgb: string;
  hex: string;  
}

export default function ColorCard({ rgb, hex }: ColorCardProps) {
  const [copied, setCopied] = useState(false);

  function copyToClipboard(e: SyntheticEvent) {
    const color = (e.target as HTMLDivElement).innerText;
    navigator.clipboard.writeText(color);
  }

  function handleCopy(e: SyntheticEvent) {
    copyToClipboard(e);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }
  return (
    <li style={{ background: rgb }}>
      <span
        onClick={handleCopy}
      >
        {copied ? "Copied!" : hex} <i className="far fa-copy fa-beat-fade"></i>
      </span>
    </li>
  );
}
