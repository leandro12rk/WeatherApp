import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function SearchInput() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleSubmit = (e) => {
   // e.preventDefault();
    // Aquí puedes agregar la lógica de búsqueda
    console.log("Buscando:", searchTerm);
  };

  return (
    <div className="container-search-input">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit">
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search">
            <title id="search">Search</title>
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
          </svg>
        </button>
        <input
          className="input"
          placeholder="Type your text"
          required
          type="search"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="reset" type="reset">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}
