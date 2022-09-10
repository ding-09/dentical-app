import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import {SortButton} from './style'

const Sort = () => {
  return (
    <SortButton aria-label='Sort'>
      <span>Sort</span>
      <BiChevronDown />
    </SortButton>
  );
};

export default Sort;
