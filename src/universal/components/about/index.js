import React from 'react';

const About = (props) => {
  return (
    <div className="monkey">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );

};

export default About
