import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onSearch } from "../../redux/search";

const SearchBarContainer = styled.div`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
  }

  select {
    width: 7rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    transition: background-color 0.1s;
    &:hover {
      color: white;
      background-color: #dadada;
    }
  }
`;

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [provider, setProvider] = useState(searchProviders[0]?.value);
  const dispatch = useDispatch();

  function handleSearchInput(e) {
    setQuery(e.target.value);
  }

  function handleProviderChange(e) {
    setProvider(e.target.value);
  }

  function handleOnSearchClick() {
    dispatch(onSearch());
  }

  return (
    <SearchBarContainer>
      <input
        type="text"
        placeholder="Search here.."
        value={query}
        onChange={handleSearchInput}
      />
      <button onClick={handleOnSearchClick}>Search</button>
      <select
        id="search_provider"
        name="Search Provider"
        value={provider}
        onChange={handleProviderChange}
      >
        {searchProviders.map(({ id, value, name }) => (
          <option key={id} value={value}>
            {name}
          </option>
        ))}
      </select>
    </SearchBarContainer>
  );
};

const searchProviders = [
  {
    id: 1,
    name: "Google",
    value: "google",
  },
  {
    id: 2,
    name: "Bing",
    value: "bing",
  },
  {
    id: 3,
    name: "Both",
    value: "both",
  },
];

export default SearchBar;
