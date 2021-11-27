const Search = ({searchQuery, setSearchQuery}) => (
    <form action="/dashboard" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Syllabi</span>
        </label>
        <input  
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search syllabi"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);

export default Search;