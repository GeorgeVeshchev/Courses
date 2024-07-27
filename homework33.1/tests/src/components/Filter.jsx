import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions/todoActions.js';

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  return (
    <div className="filter">
      <button onClick={() => dispatch(setFilter('ALL'))} className={currentFilter === 'ALL' ? 'active' : ''}>
        Всі
      </button>
      <button onClick={() => dispatch(setFilter('ACTIVE'))} className={currentFilter === 'ACTIVE' ? 'active' : ''}>
        Активні
      </button>
      <button onClick={() => dispatch(setFilter('COMPLETED'))} className={currentFilter === 'COMPLETED' ? 'active' : ''}>
        Виконані
      </button>
    </div>
  );
};

export default Filter;
