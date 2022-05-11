import React from 'react';
import { FilterSection, FilterName, FilterInput } from './Filter.styled';
import { handleChangeFilter } from 'redux/contactsSplice';
import { useSelector, useDispatch } from 'react-redux';

export default function Filter() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <FilterSection>
      <FilterName>Find contacts by name</FilterName>
      <FilterInput
        type="text"
        value={value}
        onChange={evt => dispatch(handleChangeFilter(evt.target.value))}
      />
    </FilterSection>
  );
}
