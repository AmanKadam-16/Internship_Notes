import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from 'src/store'
import Dropdown from 'src/libraries/Training/Dropdown'
import { getCountryList } from 'src/requests/Task/RequestTask';

const countries = ['Country 1', 'Country 2'];
const states = ['State 1', 'State 2'];
const cities = ['City 1', 'City 2'];






//


const DropTask = () => {
  const countryList = useSelector((state: RootState) => state.Task.CountryList);
  
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCountryList())
  },[])
  console.log(countryList)
  return (
    <>
        <div>
        <Dropdown ItemList={countryList} Label={'Country List'}
                            DefaultValue={undefined} ClickItem={undefined} 
                            ErrorMessage={undefined} />
    </div>
    //
    //
    <div>
    <select onChange={(e) => setCountry(e.target.value)}>
      <option>Select a country</option>
      {countries.map((country, index) => (
        <option key={index} value={country}>
          {country}
        </option>
      ))}
    </select>

    {country && (
      <select onChange={(e) => setState(e.target.value)}>
        <option>Select a state</option>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
    )}

    {state && (
      <select onChange={(e) => setCity(e.target.value)}>
        <option>Select a city</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    )}
  </div>
    </>

  );
}

export default DropTask

