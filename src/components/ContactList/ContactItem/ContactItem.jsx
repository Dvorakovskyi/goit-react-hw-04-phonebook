import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledItem,
  StyledDeleteBtn,
  StyledContactDescr,
} from './ContactItem.styled';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <StyledItem key={id}>
      <StyledContactDescr>
        {name}: {number}
      </StyledContactDescr>
      <StyledDeleteBtn type="button" onClick={onClick}>
        Delete
      </StyledDeleteBtn>
    </StyledItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
