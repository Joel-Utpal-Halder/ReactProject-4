// Type 'rsc', the base following structure will appear, snippets extension helps to do this
import React, { useEffect, useState } from "react";
import "./Countries.css";
import Country from "../Country/Country";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  // console.log(countries);

  // # Lacture : Load countries from API using useState and useEffect
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
  
    // <div className="countries">
    //   {countries.map((country) => (
    //     // <div>
        // {console.log(country)}
        //     <img src={country.flags.png} alt="" />
        //   <h2>{country.name.common}</h2>
        //   <p>Capital : {country.capital}</p>
        // </div>
//       ))}
//     </div>
//   );


// # Lacture : Pass data to Child components using props, unique key for mapping components
//     <div className="countries">
//       {countries.map(country => ( 

//         <Country  
//         key= {country.name.common} // Each child in a list should have a unique "key" prop.
//         name= {country.name.common} 
//         capital= {country.capital}
//         image = {country.flags.png}
//         />
//     ))}
//     </div>
//   );

// # Lacture : Pass multiple data to a child component, Props and Destructuring
    <div className="countries">
      {countries.map(country => ( 

        <Country  
        key= {country.name.common}
        country = {country}/>
    ))}
    </div>
  );

  // <div className='countries'>
  //     <h1>Bangladesh</h1>
  //     <p>Capital : Dhaka</p>
  // </div>
};

export default Countries;
