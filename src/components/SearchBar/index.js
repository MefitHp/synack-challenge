import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSearch } from "../../redux/search";
import { getSearchisLoadingSelector } from "../../redux/selectors/search";

const SearchBarContainer = styled.div`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
  }

  button {
    width: 100px;
  }

  select {
    width: 7rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    transition: all 0.1s;
    &:hover {
      color: white;
      background-color: #dadada;
    }
  }
`;

const SearchBar = () => {
  const [query, setQuery] = useState("Mefit Hernandez");
  const [provider, setProvider] = useState(searchProviders[0]?.value);
  const isLoading = useSelector(getSearchisLoadingSelector);
  const dispatch = useDispatch();

  function handleSearchInput(e) {
    setQuery(e.target.value);
  }

  function handleProviderChange(e) {
    setProvider(e.target.value);
  }

  function handleOnSearchClick() {
    if (!query) return;

    dispatch(
      onSearch({
        provider,
        query: encodeURIComponent(query),
      })
    );
  }

  return (
    <SearchBarContainer>
      <input
        type="text"
        placeholder="Search here.."
        value={query}
        onChange={handleSearchInput}
        disabled={isLoading}
      />
      <button onClick={handleOnSearchClick} disabled={isLoading}>
        {isLoading ? "Loading.." : "Search"}
      </button>
      <select
        id="search_provider"
        name="Search Provider"
        value={provider}
        onChange={handleProviderChange}
        disabled={isLoading}
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
