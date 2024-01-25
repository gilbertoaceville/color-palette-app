import styles from "./styles.module.scss";

interface NavBarProps {
  gallery: string;
  uploadImage?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function NavBar({ gallery, uploadImage }: NavBarProps) {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.nav__title}>Color Palette Generator</h1>

      <div className={styles.nav__input}>
        <label htmlFor="file">{gallery} Upload Image</label>
        <input type="file" id="file" hidden onChange={uploadImage} />
      </div>
    </nav>
  );
}
