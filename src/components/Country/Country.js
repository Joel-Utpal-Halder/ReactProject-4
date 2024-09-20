// type 'rsc' press 'Enter', will brinf the folowing code
// rsc= React Stateless Component
import React from "react";

// # Lacture : Pass data to Child components using props, unique key for mapping components
// const Country = (props) => {
//   return (
//     <div>
//       <img src={props.image} alt="" />
//       <h2>{props.name}</h2>
//       <p>Capital : {props.capital}</p>
//     </div>
//   );
// };

// # Lacture : Pass multiple data to a child component, Props and Destructuring
const Country = (props) => {
    const {flags, name, capital, population}= props.country // Destructuring
    // console.log(props);
    // console.log(props.country);
    
  return (
    <div>

      {/* <img src={props.country.flags.png} alt="" />
      <h2>{props.country.name.common}</h2>
      <p>Capital : {props.country.capital}</p> */}

      {/* Destructuring: remove 'props.country' from every line of codes since this was shown above within 'comst' variable */}
      <img style={{width: "300px", height: "200px"}} src={flags.png} alt="" />
      <h2>{name.common}</h2>
      <span>Population : {population}</span>
      <p>Capital : {capital}</p>
    </div>
  );
};

export default Country;
