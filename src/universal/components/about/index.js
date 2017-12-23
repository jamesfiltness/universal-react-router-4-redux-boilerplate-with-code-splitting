import React from 'react';

const About = (props) => {
  if (props.dataFetching) {
    return (
      <p>LOADNG DATA</p>
    );
  } else {
  return (
    <div className="about">
      <h2 className="about__title">{props.title}</h2>
      <p className="about__text">{props.text}</p>
    </div>
  );
  }
};

export default About
