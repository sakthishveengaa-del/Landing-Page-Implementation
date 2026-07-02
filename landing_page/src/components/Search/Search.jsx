import { useState } from "react";
import { Button, Container, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        
        {/* ========================================================
            SEARCH BAR WRAPPER: Contains location, input field and submit button
            ======================================================== */}
        <div className="search-bar-wrapper">
          
          {/* Group 1: Select location box with icon and arrow */}
          <div className="location-select-group" id="search-location-select">
            <LocationOnOutlinedIcon className="input-icon location-icon" />
            <span className="location-text">Select Location</span>
            <KeyboardArrowDownIcon className="dropdown-arrow" />
          </div>

          {/* Group 2: The actual text input field for typing searches */}
          <div className="search-input-group">
            <SearchIcon className="input-icon search-icon" />
            <input
              type="text"
              placeholder="Search Doctors, Specialities, Clinics and Hospitals..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input-field"
              id="search-input-field"
            />
          </div>

          {/* Group 3: The green submit button */}
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

        {/* ========================================================
            POPULAR SEARCHES LIST: Renders horizontal list of quick search chips
            ======================================================== */}
        <div className="popular-searches-container">
          <span className="popular-label">Popular Searches:</span>
          <div className="popular-chips">
            {/* Map over popularSearches list to render a Chip element for each item */}
            {popularSearches.map((term, index) => (
              <Chip
                key={index}
                label={term}
                // Set input field value when a popular chip is clicked
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
