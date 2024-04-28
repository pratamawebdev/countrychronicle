import { gql, useQuery } from "@apollo/client";
import styles from "./Content.module.css";
import { Data } from "../../../types";

const COUNTRY = gql`
  query ($countryCode: ID!) {
    country(code: $countryCode) {
      name
      native
      phone
      continent {
        name
      }
      emoji
    }
  }
`;

const ContentModal: React.FC<{ idCountry: string }> = ({ idCountry }) => {
  const { data } = useQuery<Data>(COUNTRY, {
    variables: { countryCode: idCountry },
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{data?.country?.name}</h1>
        <div className={styles.info}>
          <p>
            Native Name: <span>{data?.country?.native}</span>
          </p>
          <p>
            Continent: <span>{data?.country?.continent?.name}</span>
          </p>
          <p>
            Phone Code: <span>{data?.country?.phone}</span>
          </p>
        </div>
      </div>
      <div className={styles.image}>
        <img src={`https://emojicdn.elk.sh/${data?.country?.emoji}`} alt="" />
      </div>
    </div>
  );
};

export default ContentModal;
