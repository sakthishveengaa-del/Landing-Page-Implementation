import { useState } from "react";
import { Button, Container, Chip } from "@mui/material";
import { Icon } from "@iconify/react";

import "./Search.scss";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  const popularSearches = [
    "Dermatologist",
    "Gynecologist",
    "Paediatrician",
    "Orthopaedic",
    "Dentist",
  ];

  return (
    <section className="search-section">
      <Container maxWidth="lg" className="search-container">
        <div className="search-bar-wrapper">
          
          <div className="location-select-group" id="search-location-select">
            <Icon icon="famicons:location-outline" width="18" height="18" className="input-icon location-icon" />
            <span className="location-text">Select Location</span>
            <Icon icon="tabler:chevron-down" width="16" height="16" className="dropdown-arrow" />
          </div>

          <div className="search-input-group">
            <Icon icon="iconamoon:search-light" width="18" height="18" className="input-icon search-icon" />
            <input
              type="text"
              placeholder="Search Doctors, Specialities, Clinics and Hospitals..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input-field"
              id="search-input-field"
            />
          </div>

          <Button
            variant="contained"
            className="search-btn"
            disableRipple
            onClick={handleSearch}
            id="search-btn-submit"
          >
            Search
          </Button>

        </div>

        <div className="popular-searches-container">
          <span className="popular-label">Popular Searches:</span>
          <div className="popular-chips">
            {popularSearches.map((term, index) => (
              <Chip
                key={index}
                label={term}
                onClick={() => setQuery(term)}
                className="popular-chip"
                clickable
                id={`search-chip-${term.toLowerCase()}`}
              />
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default Search;

