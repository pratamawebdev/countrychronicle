import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <h1 className={styles.title}>
          Country<span>Chronicle</span>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
