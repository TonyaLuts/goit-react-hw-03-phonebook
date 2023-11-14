import { FilterTitle, Filter } from './Filter.styled';

export const FilterContact = ({ filter, onSearch }) => {
  return (
    <FilterTitle>
      Find contacts by name
      <Filter type="text" value={filter} onChange={onSearch}></Filter>
    </FilterTitle>
  );
};
