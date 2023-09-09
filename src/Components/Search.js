import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchMessage, setSearchMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/api/recipe/search?query=${query}`, {
        method: 'GET',
      });

      if (response.status === 200) {
        const data = await response.json();
        setSearchResults(data);
        setSearchMessage('');
      } else if (response.status === 404) {
        setSearchResults([]);
        setSearchMessage('No matching tasks found.');
      }
    } catch (error) {
      console.error('Error searching for tasks:', error);
    }
  };

  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <h2>Search Tasks</h2>
            <form onSubmit={handleSearch}>
              <MDBInput
                type="text"
                label="Enter your search query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <MDBBtn color="info" type="submit">
                Search
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
        {searchMessage && <p>{searchMessage}</p>}
        {searchResults.length > 0 && (
          <div>
            <h3>Search Results</h3>
            <ul>
              {searchResults.map((task) => (
                <li key={task._id}>{task.taskName}</li>
              ))}
            </ul>
          </div>
        )}
      </MDBContainer>
    </div>
  );
};

export default Search;