import styles from "./Container.module.css";
import { ContainerProps } from "../../../types";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default Container;
