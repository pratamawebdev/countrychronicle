import { useState } from "react";
import "./App.css";
import Navbar from "./components/Fragments/Navbar";
import Container from "./components/Layouts/Container";
import Modal from "./components/Fragments/Modal";
import Card from "./components/Fragments/Card";
import { gql, useQuery } from "@apollo/client";
import ContentModal from "./components/Fragments/ContentModal";
import SearchBar from "./components/Fragments/SearchBar";
import Button from "./components/Elements/Button";
import { Data } from "./types";

const COUNTRIES = gql`
  {
    countries {
      code
      name
      capital
      emoji
      currency
    }
  }
`;

const App: React.FC = () => {
  const { data } = useQuery<Data>(COUNTRIES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idCountry, setIdCountry] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [visibleCountries, setVisibleCountries] = useState(9);

  const openModal = (code: string) => {
    setIsModalOpen(true);
    setIdCountry(code);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
  };

  const handleLoadMore = () => {
    setVisibleCountries((prevCount) => prevCount + 9);
  };

  const filteredCountries =
    data?.countries
      ?.filter((country: { name: string }) =>
        country.name.toLowerCase().includes(searchInput.toLowerCase())
      )
      .slice(0, visibleCountries) || [];

  return (
    <>
      <Navbar />
      <Container>
        <SearchBar
          searchInput={searchInput}
          handleSearchInputChange={handleSearchInputChange}
          placeholder={"Search for a country..."}
        />

        <div className="content-layout">
          <Card countries={filteredCountries} onClick={openModal} />
        </div>
        <div className="load-more">
          {data?.countries && data.countries.length > visibleCountries && (
            <Button type="button" onClick={handleLoadMore}>
              Load More
            </Button>
          )}
        </div>
      </Container>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContentModal idCountry={idCountry} />
      </Modal>
    </>
  );
};

export default App;
