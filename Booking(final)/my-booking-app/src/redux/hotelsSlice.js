import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api.js';

// Асинхронный экшен для получения списка отелей
export const fetchHotels = createAsyncThunk(
  'hotels/fetchHotels',
  async () => {
    const response = await api.get('/hotels');
    return response.data;
  }
);

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: {
    hotels: [],
    loading: false,
    error: null,
    searchParams: {
      destination: '',
      checkIn: '',
      checkOut: ''
    },
    filteredHotels: [],
    showHotels: false
  },
  reducers: {
    setDestination: (state, action) => {
      state.searchParams.destination = action.payload;
    },
    setCheckIn: (state, action) => {
      state.searchParams.checkIn = action.payload;
    },
    setCheckOut: (state, action) => {
      state.searchParams.checkOut = action.payload;
    },
    searchHotels: (state) => {
      const { destination, checkIn, checkOut } = state.searchParams;

      console.log('Filter criteria:', { destination, checkIn, checkOut });
      
      state.filteredHotels = state.hotels.filter(hotel => {
        const matchesDestination = destination ? hotel.destination.toLowerCase().includes(destination.toLowerCase()) : true;
        return matchesDestination;
      });

      console.log('Filtered hotels:', state.filteredHotels);
      state.showHotels = state.filteredHotels.length > 0;
    },
    clearSearchParams: (state) => {
      state.searchParams = { destination: '', checkIn: '', checkOut: '' };
      state.filteredHotels = state.hotels;
      state.showHotels = state.hotels.length > 0;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.hotels = action.payload;
        state.loading = false;
        state.filteredHotels = state.hotels; // Default display all hotels
        state.showHotels = state.hotels.length > 0;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  }
});

export const { setDestination, setCheckIn, setCheckOut, searchHotels, clearSearchParams } = hotelsSlice.actions;

export default hotelsSlice.reducer;
