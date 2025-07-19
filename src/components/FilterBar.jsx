import './FilterBar.css';

const FilterBar = ({ selectedCity, setSelectedCity }) => {
  return (
    <div className="filter-bar">
      <button onClick={() => setSelectedCity('All')} className={selectedCity === 'All' ? 'active' : ''}>All</button>
      <button onClick={() => setSelectedCity('São Paulo')} className={selectedCity === 'São Paulo' ? 'active' : ''}>São Paulo</button>
      <button onClick={() => setSelectedCity('Rio de Janeiro')} className={selectedCity === 'Rio de Janeiro' ? 'active' : ''}>Rio de Janeiro</button>
    </div>
  );
};

export default FilterBar;
