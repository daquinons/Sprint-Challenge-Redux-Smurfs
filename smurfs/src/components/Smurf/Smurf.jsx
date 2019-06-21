import React from 'react';
import propTypes from 'prop-types';
import smurf from '../../reducers';

const Smurf = props => {
  return (
    <div>
      <p>Name: {props.smurf.name}</p>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.age}</p>
    </div>
  );
};

smurf.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
  height: propTypes.string.isRequired
};

export default Smurf;
