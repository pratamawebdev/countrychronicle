import styles from "./SearchBar.module.css";
import { SearchBarProps } from "../../../types";

const SearchBar: React.FC<SearchBarProps> = ({
  searchInput,
  handleSearchInputChange,
  placeholder,
}) => {
  return (
    <div className={styles.searchLayout}>
      <input
        type="text"
        className={styles.searchBar}
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
