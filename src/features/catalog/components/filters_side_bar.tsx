const FiltersSidebar = () => {
  const brands = ["Ajmal", "Rasasi", "Al Haramain", "Swiss Arabian", "Lattafa", "Armaf"];
  const genders = ["Men", "Women", "Unisex"];
  const seasons = ["Spring", "Summer", "Fall", "Winter"];
  const intensity = ["Light", "Moderate", "Intense", "Very Intense"];

  return (
    <aside className="w-72 bg-gray-50 p-6 rounded-lg h-[calc(100vh-120px)] overflow-y-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
        <h3 className="font-serif text-lg">Filters</h3>
        <button className="text-xs uppercase text-gray-500 hover:text-black">
          Clear All
        </button>
      </div>

      {/* BRAND */}
      <FilterGroup title="Brand" items={brands}  />

      {/* GENDER */}
      <FilterGroup title="Gender" items={genders} />

      {/* SEASON */}
      <FilterGroup title="Season" items={seasons} />

      {/* INTENSITY */}
      <FilterGroup title="Intensity" items={intensity} />

      {/* PRICE RANGE */}
      <div className="mb-6">
        <h4 className="text-xs uppercase tracking-wider mb-4">Price Range</h4>

        <input
          type="range"
          min="0"
          max="500"
          className="w-full accent-black"
        />

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>$0</span>
          <span>$500</span>
        </div>
      </div>

    </aside>
  );
};

const FilterGroup = ({ title, items}: { title: string; items: string[]}) => (
  <div className="mb-8">
    <h4 className="text-xs uppercase tracking-wider mb-4">{title}</h4>

    <div className="space-y-3">
      {items.map((item) => (
        <label key={item} className="flex items-center gap-3 text-sm text-gray-700">
          <input type="checkbox" className="w-4 h-4"/>
          {item}
        </label>
      ))}
    </div>
  </div>
);

export default FiltersSidebar;