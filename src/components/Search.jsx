import React, {useState} from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { api } from "../api";
const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    const loadOptions = async(inputValue) => {
        try {
            const response = await fetch(`${api.GEO_API_URL}/cities?minPopulation=100&namePrefix=${inputValue}`, api.geoApiOptions);
            const result = await response.json();
            return {
                options: result.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.region}, ${city.countryCode}`,
                    }
                })
            }
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <AsyncPaginate 
            className="searchBar"
            placeholder={'Search for city'}
            debounceTimeout={800}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />);
};

export default Search;