import React from 'react';

const Home = (props) => {
  if (props.dataFetching) { 
    return (  
      <p>Loading...</p>
    ); 
  } else {
    return ( 
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div> 
    );
  }
}

export default Home
