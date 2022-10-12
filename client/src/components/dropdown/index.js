import React from 'react';
import { DropdownList } from './dropdown.styles';

const DropDown = ({ name, ref, label, list, onChange }) => {

  return (
    <DropdownList className={name} ref={ref} onChange={onChange}>
      <option>{label}</option>
      {list}
    </DropdownList>
  );
};

export default DropDown;
