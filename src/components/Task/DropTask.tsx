import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import Dropdown from 'src/libraries/Training/Dropdown'
import { getCountryList, getStateList, getCityList } from 'src/requests/Task/RequestTask';
import PageHeader from 'src/libraries/heading/PageHeader';
import { IGetDropdownBody } from 'src/interfaces/Task/ITask';
const DropTask = () => {

  // const countries = ['Country 1', 'Country 2'];
  const states = ['State 1', 'State 2'];
  const cities = ['City 1', 'City 2'];
  const countryList = useSelector((state: RootState) => state.Task.CountryList);
  const stateList = useSelector((state: RootState) => state.Task.StateList);
  const cityList = useSelector((state: RootState) => state.Task.CityList);

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryList())
  }, [])


  useEffect(() => {
if (country!==''){
  const IGetDropdownBody : IGetDropdownBody = {
     country_id: Number(country)
  }
  dispatch(getStateList(IGetDropdownBody))
}
  }, [country])


  useEffect(() => {
    if (state!==''){
      const IGetDropdownBody : IGetDropdownBody = {
         state_id: Number(state)
      }
      dispatch(getCityList(IGetDropdownBody))
    }
      }, [state])

  console.log(countryList)

  console.log(stateList)
  const clickCountry = (value) => {
    setCountry(value)
  }

  const clickState = (value) =>{
    setState(value)
    console.log(value)
  }

  const clickCity = (value) =>{
    setCity(value)
    console.log(value)
  }
  return (
    <>
      {/* <div>
 
      </div> */}
      <div>
        <PageHeader heading='Dropdown Task' />
      <Dropdown ItemList={countryList} Label={'Country List'}
          DefaultValue={country} ClickItem={clickCountry}
          ErrorMessage={undefined} />

         {country && (
       <Dropdown ItemList={stateList} Label={'State List'}
       DefaultValue={state} ClickItem={clickState}
       ErrorMessage={undefined} />
        )}

{state && (
       <Dropdown ItemList={cityList} Label={'City List'}
       DefaultValue={city} ClickItem={clickCity}
       ErrorMessage={undefined} />
        )}

        {/* {state && (
          <select onChange={(e) => setCity(e.target.value)}>
            <option>Select a city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        )}  */}
      </div>
    </>

  );
}

export default DropTask

