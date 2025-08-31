import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import SearchIcon from "@mui/icons-material/Search";
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
          <SearchIcon />
        </button>
        <input
          className="input"
          placeholder="Search Countries..."
          required
          type="search"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
