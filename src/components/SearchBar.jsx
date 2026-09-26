function SearchBar({ search, setSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Pesquise um personagem..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  )
}

export default SearchBar