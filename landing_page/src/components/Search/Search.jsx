import { useState } from "react";
import { Button, Container, Chip } from "@mui/material";
import { Icon } from "@iconify/react";

import "./Search.scss";

/**
 * Search Component
 * Renders the search bar section allowing users to search doctors/hospitals
 * and select from popular search keyword tags.
 */
const Search = () => {
  // local query state to store the text input by the user
  const [query, setQuery] = useState("");

  // trigger mock searching action (typically coordinates with API/parent callback)
  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  // Popular search terms to help users search faster
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
          
          {/* Location Selection Dropdown */}
          <div className="location-select-group" id="search-location-select">
            <Icon icon="famicons:location-outline" width="18" height="18" className="input-icon location-icon" />
            <span className="location-text">Select Location</span>
            <Icon icon="tabler:chevron-down" width="16" height="16" className="dropdown-arrow" />
          </div>

          {/* Search Input Box */}
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

          {/* Action Trigger Button */}
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

        {/* Popular Quick Searches Tag List */}
        <div className="popular-searches-container">
          <span className="popular-label">Popular Searches:</span>
          <div className="popular-chips">
            {popularSearches.map((term, index) => (
              <Chip
                key={index}
                label={term}
                // Pre-fills search term and clicks search
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

