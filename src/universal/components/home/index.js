import React from 'react';

const Home = (props) => {
  return (
    <div className="home">
      <h2 className="home__title">{props.title}</h2>
      <p className="home__text">{props.text}</p>
    </div>
  );
}

export default Home
