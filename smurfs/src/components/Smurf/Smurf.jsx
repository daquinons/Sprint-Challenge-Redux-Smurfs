import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { deleteSmurf } from '../../actions/index';


const Smurf = props => {
  const onClickDelete = () => {
    props.deleteSmurf(props.smurf.id);
  }
  return (
    <div style={{width: "300px", margin: "0 auto"}}>
      <p>Name: {props.smurf.name}</p>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <button onClick={onClickDelete}>Delete</button>
      <hr />
    </div>
  );
};

Smurf.propTypes = {
  smurf : propTypes.shape({
    name: propTypes.string.isRequired,
    age: propTypes.number.isRequired,
    height: propTypes.string.isRequired  
  }).isRequired
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(Smurf);

