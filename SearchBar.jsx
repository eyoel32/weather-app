function SearchBar({ input, setInput, fetchByCity, fetchByLocation }) {

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchByCity();
    }
  };

  return (
    <div className="btn">
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}  
        onKeyDown={handleKeyPress}
      />

      <button onClick={fetchByCity}>Search</button>
      <button onClick={fetchByLocation}>Use My Location</button>
    </div>
  );
}

export default SearchBar;
