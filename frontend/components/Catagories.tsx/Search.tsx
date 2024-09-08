import React from 'react';
import Image from 'next/image';

const Search: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission
    const form = event.currentTarget as HTMLFormElement;
    form.submit(); // Submit the form
  };

  return (
    <section className="search flex justify-between items-center p-4">
      <div className="search-form">
        <form id="searchForm" action="https://www.industrialtrading.net/search" onSubmit={handleSubmit}>
          <input
            type="hidden"
            id="hdnAutoCompleteUrl"
            value="https://www.industrialtrading.net/autocomplete/products"
          />
          <input
            type="text"
            name="query"
            id="searchQuery"
            placeholder="Find Products by Part Number"
            aria-label="Query"
            maxLength={80}
            autoComplete="off"
            autoCorrect="off"
            className="border rounded-lg p-2 w-80"
          />
          <button type="submit" aria-label="Search">
            <Image src="/images/search.png" alt="search" width={24} height={24} className="cursor-pointer" />
          </button>
        </form>
      </div>
      <div className="search-list flex items-center space-x-4">
        <div className="search-item flex items-center space-x-2">
          <Image src="/images/global.png" alt="global" width={24} height={24} />
          <p>Worldwide Shipping</p>
        </div>
        <div className="search-item flex items-center space-x-2">
          <Image src="/images/truck-fast.png" alt="truck fast" width={24} height={24} />
          <p>Rush Delivery Available</p>
        </div>
      </div>
    </section>
  );
};

export default Search;