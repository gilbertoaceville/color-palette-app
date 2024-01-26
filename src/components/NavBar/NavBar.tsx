import styles from "./NavBar.module.scss";

interface NavBarProps {
  uploadImage?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function NavBar({ uploadImage }: NavBarProps) {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.nav__title}> Color Palette Generator</h1>

      <div className={styles.nav__input}>
        <label htmlFor="file">
          <i className="fas fa-images fa-beat-fade" /> Upload Image
        </label>
        <input type="file" id="file" hidden onChange={uploadImage} />
      </div>
    </nav>
  );
}
