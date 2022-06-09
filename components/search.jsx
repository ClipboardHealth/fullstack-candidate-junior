

function SearchBar({searchFunction}) {
  return (
    <div className="flex">
      <input
        className="w-full m-6 text-sm p-4 border border-solid border-neutral-200"
        placeholder="Search for any job, title, keywords or company"
        onChange={(e) => searchFunction(e.target.value.toLowerCase())}
      ></input>
    </div>
  );
}

export default SearchBar;
