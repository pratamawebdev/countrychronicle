import { CardProps } from "../../../types";
import styles from "./Card.module.css";

const Card: React.FC<CardProps> = ({ countries, onClick }) => {
  const detail = "./images/detail.svg";
  return countries?.map((country) => (
    <div key={country.code} className={styles.card}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.name}>{country.name}</h1>
          <img
            src={`https://emojicdn.elk.sh/${country.emoji}`}
            alt="Flag"
            className={styles.flag}
          />
        </div>
        <div className={styles.body}>
          <p>
            Capital City: <span>{country.capital}</span>
          </p>
          <p>
            Currency: <span>{country.currency}</span>
          </p>
        </div>
        <div className={styles.footer}>
          <img
            src={detail}
            alt="icon detail"
            className={styles.detail}
            onClick={() => onClick(country.code)}
          />
        </div>
      </div>
    </div>
  ));
};

export default Card;
