import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("countriesData", async () => {
  let { data } = await axios.get("https://restcountries.com/v3.1/all");
  data = data.sort((a, b) => b.population - a.population);
  return data;
});

export const fetchCountryData = createAsyncThunk(
  "countryDetail",
  async (name) => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    return data;
  }
);

export const fetchNeighbouringCountriesData = createAsyncThunk(
  "neighbouringCountries",
  async (codes) => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/alpha?codes=${codes}`
    );
    return data;
  }
);

const initialState = {
  countries: {
    isLoading: true,
    data: [],
    error: false,
    searchedText: "",
    regionFilter: null,
    unMember: true,
    independent: true,
  },
  countryDetail: {
    dataLoading: true,
    data: null,
    isError: false,
  },
  neighbouringCountries: {
    dataLoading: true,
    data: [],
    isError: false,
  },
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    // Search Functionality
    addSearchedText: (state, action) => {
      state.countries.searchedText = action.payload;
    },
    // Filter Functionality
    regionFilter: (state, action) => {
      state.countries.regionFilter = action.payload;
    },
    regionFilterPushValue: (state, action) => {
      state.countries.regionFilter.push(action.payload);
    },
    regionFilterDelValue: (state, action) => {
      state.countries.regionFilter = state.countries.regionFilter.filter(
        (val) => val !== action.payload
      );
    },
    // Sorting Functionality
    sortData: (state, action) => {
      state.countries.isLoading = true;

      if (action.payload === "Population") {
        state.countries.data.sort((a, b) => b.population - a.population);
      } else if (action.payload === "Area (km2)") {
        state.countries.data.sort((a, b) => b.area - a.area);
      } else if (action.payload === "Name") {
        state.countries.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
      }

      state.countries.isLoading = false;
    },

    // Status Functionality

    unMemberFunc: (state) => {
      state.countries.unMember = !state.countries.unMember;
    },
    independent: (state) => {
      state.countries.independent = !state.countries.independent;
    },
  },
  extraReducers: (builder) => {
    // All Countries
    builder.addCase(fetchData.pending, (state) => {
      state.countries.isLoading = true;
      state.countries.data = [];
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.countries.isLoading = false;
      state.countries.data.push(...action.payload);
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.countries.isLoading = false;
      state.countries.error = true;
    });
    // Country Details
    builder.addCase(fetchCountryData.pending, (state) => {
      state.countryDetail.dataLoading = true;
    });
    builder.addCase(fetchCountryData.fulfilled, (state, action) => {
      state.countryDetail.dataLoading = false;
      state.countryDetail.data = action.payload;
    });
    builder.addCase(fetchCountryData.rejected, (state) => {
      state.countryDetail.dataLoading = false;
      state.countryDetail.isError = true;
    });
    // Country Details
    builder.addCase(fetchNeighbouringCountriesData.pending, (state) => {
      state.neighbouringCountries.dataLoading = true;
    });
    builder.addCase(
      fetchNeighbouringCountriesData.fulfilled,
      (state, action) => {
        state.neighbouringCountries.dataLoading = false;
        state.neighbouringCountries.data = action.payload;
      }
    );
    builder.addCase(fetchNeighbouringCountriesData.rejected, (state) => {
      state.neighbouringCountries.dataLoading = false;
      state.neighbouringCountries.isError = true;
    });
  },
});

export const {
  addSearchedText,
  regionFilter,
  regionFilterPushValue,
  regionFilterDelValue,
  sortData,
  unMemberFunc,
  independent,
} = countriesSlice.actions;
export default countriesSlice.reducer;
