import { useDispatch, useSelector  } from 'react-redux';
import { useEffect } from 'react';
import { searchHotels, clearSearchParams, setDestination, setCheckIn, setCheckOut , fetchHotels } from '../redux/hotelsSlice.js';


const useHotels = () => {
  const dispatch = useDispatch();
  const { destination, checkIn, checkOut } = useSelector((state) => state.hotels.searchParams);
  const {  filteredHotels, showHotels } = useSelector((state) => state.hotels);




  useEffect(()=>{
    dispatch(fetchHotels());
    },[dispatch]);


  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchHotels({ destination, checkIn, checkOut }));
  };

  const handleClearFilters = () => {
    dispatch(clearSearchParams());
  };

  const updateDestination = (value) => {
    dispatch(setDestination(value));
  };

  const updateCheckIn = (value) => {
    dispatch(setCheckIn(value));
  };

  const updateCheckOut = (value) => {
    dispatch(setCheckOut(value));
  };

  return {
    destination,
    updateDestination,
    checkIn,
    updateCheckIn,
    checkOut,
    updateCheckOut,
    filteredHotels,
    showHotels,
    handleSearch,
    handleClearFilters
  };
};

export default useHotels;
