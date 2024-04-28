import styles from "./Button.module.css";
import { ButtonProps } from "../../../types";

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
