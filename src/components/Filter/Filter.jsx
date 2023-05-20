import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel, StyledInput, StyledFilterSection } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <StyledFilterSection>
      <StyledLabel htmlFor="search">Find contacts by name</StyledLabel>
      <StyledInput
        id="search"
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Seach name"
      />
    </StyledFilterSection>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
