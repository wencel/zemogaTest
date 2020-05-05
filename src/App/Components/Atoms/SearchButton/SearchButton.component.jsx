import React, { useState, useRef } from "react";
import { Button, SearchButtonContainer } from "./SearchButton.styled";

const SearchButton = () => {
  const searchRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);
  return (
    <SearchButtonContainer show={showSearchInput || searchTerm}>
      <Button
        onClick={() => {
          setShowSearchInput(true);
          searchRef.current.focus();
        }}
      >
        <img
          src='https://storage.googleapis.com/zemogatest/search.png'
          alt='search'
        />
      </Button>
      <input
        onBlur={() => {
          setShowSearchInput(false);
        }}
        ref={searchRef}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <Button
        show={showSearchInput || searchTerm}
        onClick={() => {
          setSearchTerm("");
          setShowSearchInput(true);
          searchRef.current.focus();
        }}
        className='closeButton'
      >
        ×
      </Button>
    </SearchButtonContainer>
  );
};

export default SearchButton;
